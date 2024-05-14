import mongoose from "mongoose";

const wazirxSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    base_unit: {
        type: String,
        // required: true
    },
    low: {
        type: String,
        // required: true
    },
    high: {
        type: String,
        // required: true
    },
    last: {
        type: String,
        // required: true
    },
    open: {
        type: String,
        // required: true
    },
    volume: {
        type: String,
        // required: true
    },
    sell: {
        type: String,
        // required: true
    },
    type: {
        type: String,
        // required: true
    },
    buy: {
        type: String,
        // required: true
    },

})

export const WazirxModel = new mongoose.model('WazirxModel', wazirxSchema)