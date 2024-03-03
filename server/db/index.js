const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://amishamishra12886:lWllpdczzsOA7oJj@cluster0.bv6fqzo.mongodb.net/aryabhatta?retryWrites=true&w=majority");

const aiAgents = new mongoose.Schema({
    Agent: String
})

const callHistory = new mongoose.Schema({
    Topic: String,
    Time: String,
    AgentUsed: String,
    Duration: String,
    Transcript: String
});

const userDetails = new mongoose.Schema({
    Username: String,
    PhoneNumber: String,
    Profession: String,
    Organisation: String
})

const Ai_agents = mongoose.model('aiAgents', aiAgents);
const Call_history = mongoose.model('callHistory', callHistory);
const User_details = mongoose.model('userDetails', userDetails);
module.exports = {
    Ai_agents,
    Call_history,
    User_details
}