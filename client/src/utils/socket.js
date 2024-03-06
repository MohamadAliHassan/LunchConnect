import io from "socket.io-client";
import { fetchHelper } from "./fetchHelper";

let socket;
const SOCKET_URL = "http://localhost:3000";

export const initiateSocket = (channel, username) => {
    socket = io(SOCKET_URL, {
        query: { channel, username },
    })

    console.log("Connecting to socket")

    if (socket && channel) {
        socket.emit("CHANNEL_JOIN", channel)
    }
}

export const switchChannel = (prevChannel, channel) => {
    if (socket) {
        socket.emit("CHANNEL_SWITCH", { prevChannel, channel });

    }
};

export const subscribeToMessages = (callback) => {
    if (!socket) {
        return
    }

    socket.on("NEW_MESSAGE", (data) => {
        callback(null, data)
    })
}

export const sendMessage = (data) => {
    if (!socket) {
        return;
    }

    socket.emit("MESSAGE_SEND", data)
}

export const fetchChannels = async () => {
    const response = await fetchHelper(`${SOCKET_URL}/getChannels`, "get")

    return response.data.channels;
}

export const fetchChannelMessages = async (channel) => {
    const response = await fetchHelper(`${SOCKET_URL}/channels/${channel}/messages`, "get")

    return response.data.allMessages;
}