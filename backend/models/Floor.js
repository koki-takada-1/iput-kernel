const mongoose = require("mongoose");

const FloorSchema = new mongoose.Schema({
    floor: {
        type: Number,
        required: true,        
    },
    roomsId: {
        type: Array,
        default: [],
    },
    isStopElevator: {
        type: Boolean,
        default: false,
    },
    isStopRed: {
        type: Boolean,
        default: false,
    },
    isStopGreen: {
        type: Boolean,
        default: false,
    },
    isStopBlue: {
        type: Boolean,
        default: false,
    },

});


        