const users = {};

export const addUser = (username, socketId) => {
    users[username] = socketId;
}

export const removeUser = (username) => {
    if(users.hasOwnProperty(username)) {
        delete users[username]
    }
}