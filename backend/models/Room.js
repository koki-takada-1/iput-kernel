const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    roomName: {
        type: String,
        default: "教室",
    },
    roomNumber: {
        type: String,
        default: "",
    },
    status: {
        type: String,
        default: "",
    },
});

module.exports = mongoose.model("Room",RoomSchema);