import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";

const sendMessage = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const { message } = req.body;
        const senderId = req.user._id;
        
        let conversation = await Conversation.findOne({
            participant: { $all: [senderId, receiverId] }
        });

        if (!conversation){
            conversation = await Conversation.create({
                participant: [senderId, receiverId],
            })
        };

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

         if (newMessage){
              conversation.messages.push(newMessage._id);
         }

         // SOCKET IO Functionality will go here


         // this will run in parallel
         await Promise.all([await newMessage.save(), conversation.save()])

        res.status(201).json(newMessage);
        
    } catch (error) {
        console.log("error sendMessage in messageControllers", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export default sendMessage;