const express = require('express');
// const adminRoute = require('./routes/admin');
// const userRoute = require('./routes/user')
const apiRoute = require('./routes/api');

const app = express();

// app.get("/api", (req, res) => {
//     res.json({"users": ["userOne", "userTwo", "userThree", "userFour"] })
// })
app.use("/api", apiRoute);
// app.use("/admin", adminRoute);
// app.use("/user", userRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});