const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://amishamishra12886:lWllpdczzsOA7oJj@cluster0.bv6fqzo.mongodb.net/aryabhatta?retryWrites=true&w=majority");

const callTranscripts = new mongoose.Schema({
    time: String,
    topic: String,
    record: String
})
