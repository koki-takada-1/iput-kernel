const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    roomName: {
        type: String,
        default: "",
    },
    roomNumber: {
        type: String,
        default: "",
    },
});


module.exports = mongoose.model("Room",UserSchema);