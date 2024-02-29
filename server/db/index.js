const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://amishamishra12886:lWllpdczzsOA7oJj@cluster0.bv6fqzo.mongodb.net/aryabhatta?retryWrites=true&w=majority");

const callTranscript = new mongoose.Schema({
    time: String,
    topic: String,
    record: String
});

const phoneNumber = new mongoose.Schema({
    phoneNumber: String,
})

const Transcript = mongoose.model('callTranscript', callTranscript);
const Phone = mongoose.model('phoneNumber', phoneNumber);
module.exports = {
    Transcript,
    Phone
}