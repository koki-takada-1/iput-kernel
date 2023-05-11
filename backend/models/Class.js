const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    classGrade: {
        type: Number,
        required: true,
    },
    classChar: {
        type: String,
        max:2
    },
    studentsId: {
        type: Array,
        default: [],
    },
    teachersId: {
        type: Array,
        default: [],
    },
    TimetableId: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model("Class",ClassSchema); 