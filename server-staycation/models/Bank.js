const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Bank', bankSchema);
