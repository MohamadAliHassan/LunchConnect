import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const payload = res.locals.jwtPayload
        const { message } = req.body
        const { id: recieverId } = req.params;
        const senderId = payload.id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            })
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        await conversation.save();
        await newMessage.save();
    } catch (error) {
        console.log("Error to send message: ", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}