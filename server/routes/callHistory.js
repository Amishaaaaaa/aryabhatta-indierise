const { Router } = require("express");
const { Call_history } = require("../db");
const router = Router();

router.post('/', (req, res) => {
    const Topic = req.body.Topic;
    const Time = req.body.Time;
    const AgentUsed = req.body.AgentUsed;
    const Duration = req.body.Duration;
    const Transcript = req.body.Transcript;

    // Check if callTranscripts is properly defined
    if (Call_history) {
        // Assuming callTranscripts has a 'create' method
        Call_history.create({
            Topic,
            Time,
            AgentUsed,
            Duration,
            Transcript
        })
        .then(function(newTranscript) {
            res.json({
                msg: "transcript created successfully", transcriptId: newTranscript._id
            });
        })
        .catch(function(error) {
            res.status(500).json({ error: "Internal Server Error" });
        });
    } else {
        res.status(500).json({ error: "callTranscript is not defined" });
    }
})

router.get('/', async (req, res) => {
    const response = await Call_history.find({});

    res.json({
        Call_history : response
    })
})

module.exports = router;
