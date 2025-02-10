const mongoose = require("mongoose");

const queriesModel = new mongoose.Schema({
    query: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    answers: [
        {
            answer: {
                type: String
            },
            owner: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, { timestamps: true});

module.exports = mongoose.model("Query", queriesModel);