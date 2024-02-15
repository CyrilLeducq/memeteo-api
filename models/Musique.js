const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MusiqueSchema = new Schema({
    name: String,
    image: String,
});

const MusiqueModel = mongoose.model("musique", MusiqueSchema);

module.exports = MusiqueModel;