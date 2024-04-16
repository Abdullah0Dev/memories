const mongoose = require('mongoose')


const Schema = mongoose.Schema

const memoriesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    // reaction: {
    //     like: {
    //         type: Number,

    //     },
    //     dislike: {
    //         type: Number,

    //     },
    // }
}, { timestamps: true })  // generate the id, and the createdAt


module.exports = mongoose.model("Memories", memoriesSchema)