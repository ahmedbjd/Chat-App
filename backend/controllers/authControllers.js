import bcryptjs from "bcryptjs";
import User from "../models/userModel.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

const signUp = async (req, res) => {
try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword){
        return res.status(400).json({error:"Passwords don't match"});
    }
  
    const user = await User.findOne({username});
    if (user){
        return res.status(400).json({error:"Username already exist"});
    }

    //hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newUser = new User({
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
    });

  if (newUser) {

    //generate jwt token
    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic
    });
  } else {
    res.status(400).json({ error: "Invalid user data" })
  }
} catch (error) {
    console.log("Error in signup controller", error.message);
    res.send(500).json({error: "Inernal Server Error"})
}

}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect){
            res.status(400).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.send(500).json({error: "Inernal Server Error"});
    }
}

const signOut = (req, res) => {
    res.send("sign out");
}

export default {
    signUp,
    login,
    signOut
};