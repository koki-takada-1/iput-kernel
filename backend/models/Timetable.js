const mongoose = require("mongoose");

const TimetableSchema = new mongoose.Schema({
    firstPeriod: {
        subjectId: {
            type: String,
            default: "free",
        },
        room: {
            type: String,
            default: "",
        },
        style: {
            type: String,
            default: "対面授業",
        }
    },
});