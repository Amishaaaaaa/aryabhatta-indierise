const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
// const adminRoute = require('./routes/admin');
// const userRoute = require('./routes/user')
// const apiRoute = require('./routes/api');
const transcriptRoute = require('./routes/callTranscript')
const phoneNumberRoute = require('./routes/phoneNumber')

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({
        products: ["product1", "product2", "product3", "product4"],
    })
})

// app.use("/api", apiRoute);
app.use("/callTranscript", transcriptRoute);
app.use("/phoneNumber", phoneNumberRoute);
// app.use("/admin", adminRoute);
// app.use("/user", userRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});