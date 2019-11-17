const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String
});

const Model = new mongoose.model("celebrities", schema);
module.exports = Model;