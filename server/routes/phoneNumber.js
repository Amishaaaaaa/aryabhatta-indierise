const { Router } = require("express");
const { Phone } = require("../db");

const router = Router();
console.log(Phone);
router.post('/numbers', (req, res) => {
    const phoneNumber = req.body.phoneNumber;

    // Check if Phone is properly defined
    if (Phone) {
        // Assuming Phone has a 'create' method
        Phone.create({
            phoneNumber
        })
        .then(function(newPhone) {
            res.json({
                msg: "Phone number added successfully", PhoneId: newPhone._id
            });
        })
        .catch(function(error) {
            res.status(500).json({ error: "Internal Server Error" });
        });
    } else {
        res.status(500).json({ error: "Phone is not defined" });
    }
})

router.get('/numbers', async (req, res) => {
    const response = await Phone.find({});
    res.json({
        phoneNumber : response
    })
})

module.exports = router;