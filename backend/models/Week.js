const mongoose = require("mongoose");

const TimetableSchema = new mongoose.Schema({
    Monday: {
        timeTableId: {
            type: String,
            default: "",
        }
    },
    Tuesday: {
        timeTableId: {
            type: String,
            default: "",
        }
    },
    Wednesday: {
        timeTableId: {
            type: String,
            default: "",
        }
    },
    Thursday: {
        timeTableId: {
            type: String,
            default: "",
        }
    },
    Friday: {
        timeTableId: {
            type: String,
            default: "",
        }
    },
    Saturday: {
        timeTableId: {
            type: String,
            default: "",
        }
    },
});

module.exports = mongoose.model("Timetable",TimetableSchema);