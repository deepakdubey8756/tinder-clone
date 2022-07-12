const mongoose = require("mongoose")

// creating new schema
const cardSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
})

// compiling schema into model.

const cardModel =  mongoose.model("card", cardSchema);
module.exports = cardModel;