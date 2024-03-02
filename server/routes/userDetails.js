const { Router } = require("express");
const { User_details } = require("../db");

const router = Router();
console.log(User_details);
router.post('/', (req, res) => {
    const Username = req.body.Username;
    const PhoneNumber = req.body.PhoneNumber;
    const Profession = req.body.Profession;
    const Organisation = req.body.Organisation;

    // Check if Phone is properly defined
    if (User_details) {
        // Assuming Phone has a 'create' method
        User_details.create({
            Username,
            PhoneNumber,
            Profession,
            Organisation
        })
        .then(function(newPhone) {
            res.json({
                msg: "Contact details added successfully", uniqueId: newPhone._id
            });
        })
        .catch(function(error) {
            res.status(500).json({ error: "Internal Server Error" });
        });
    } else {
        res.status(500).json({ error: "User_details is not defined" });
    }
})

router.get('/', async (req, res) => {
    const response = await User_details.find({});
    res.json({
        msg: response
    })
})

module.exports = router;