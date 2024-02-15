const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MemeSchema = new Schema({
    name: String,
    image: String,
});

const MemeModel = mongoose.model("meme", MemeSchema);

module.exports = MemeModel;