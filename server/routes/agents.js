const { Router } = require("express");
const router = Router();
const { Ai_agents } = require("../db");

console.log(Ai_agents);
router.post('/', (req, res) => {
    const Agent = req.body.Agent;

    if (Ai_agents) {
        Ai_agents.create({
            Agent
        })
        .then(function(newAgent) {
            res.json({
                msg: "newAgent created successfully", uniqueId: newAgent._id
            });
        })
        .catch(function(error) {
            res.status(500).json({ error: "Internal Server Error" });
        });
    } else {
        res.status(500).json({ error: "Ai_Agent is not defined" });
    }
})

router.get('/', async (req, res) => {
    const response = await Ai_agents.find({});
    res.json({
        msg: response
    })
})

module.exports = router;