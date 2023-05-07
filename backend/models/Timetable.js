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
    secondPeriod: {
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
    thirdPeriod: {
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
    fourthPeriod: {
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
    
    fifthPeriod: {
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
    
    sixthPeriod: {
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
    
    seventhPeriod: {
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

module.exports = mongoose.model("Timetable",TimetableSchema);