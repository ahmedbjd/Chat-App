import mongoose from "mongoose";

const ConnectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected To MongoDB");
    } catch (error) {
        console.log("Error Connecting To MongoDB", error.message)
    }
}

export default ConnectToMongoDB