const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    limit: {
        type: Number,
        required: true
    },
    spent: {
        type: Number,
        default: 0
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});