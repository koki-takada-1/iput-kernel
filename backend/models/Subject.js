const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        default: "",
        required: true,
    },
    teachersId: {
        type: Array,
        default: [],
    },
    reviewsId:{
        type: Array,
        default: [],
    },
    
});

module.exports = mongoose.model("Subject",UserSchema);