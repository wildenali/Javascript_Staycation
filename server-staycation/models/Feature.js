const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    imageId: {
        type: String,
        ref: 'Image'
    }
})

module.exports = mongoose.model('Feature', featureSchema);
