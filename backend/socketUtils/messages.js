const messages = [];

export const addMessage = (data) => {
    messages.push(data);
    return data;
};

export const getChannelMessages = (channel) => {
    messages.filter((message) => message.channel === channel);
}

