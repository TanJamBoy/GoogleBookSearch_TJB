const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    authors: [{type: String, required: true}],
    description: String,
    image: {type: String, trim: true},
    link: {type: String, trim: true}
});

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;