const express = require('express');
const bodyParser = require('body-parser');
// const adminRoute = require('./routes/admin');
// const userRoute = require('./routes/user')
const apiRoute = require('./routes/api');
const transcriptRoute = require('./routes/callTranscript')
const phoneNumberRoute = require('./routes/phoneNumber')

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"] })
})

app.use("/api", apiRoute);
app.use("/callTranscript", transcriptRoute);
app.use("/phoneNumber", phoneNumberRoute);
// app.use("/admin", adminRoute);
// app.use("/user", userRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});