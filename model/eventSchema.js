const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    starttime: {
        type: Date,
        required: true
    },
    participants: {
        type: Number,
        default: 0
    },
    department: {
        type: String,
        required: true
    }
    ,
    users: []
}, {
    timestamps: true
})

const Event = mongoose.model('events', eventSchema);
module.exports = Event;