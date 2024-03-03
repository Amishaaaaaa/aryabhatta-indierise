const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const callHistoryRoute = require('./routes/callHistory')
const contactDetailsRoute = require('./routes/userDetails')
const aiAgentRoute = require('./routes/agents')

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());

app.use("/call_history", callHistoryRoute);
app.use("/user_details", contactDetailsRoute);
app.use("/ai_agents", aiAgentRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});