const { Router } = require("express");
const router = Router();


router.get('/data', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"] });
})

module.exports = router;