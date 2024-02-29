const { Router } = require("express");
const { Transcript } = require("../db");
const router = Router();

router.post('/transcripts', (req, res) => {
    const time = req.body.time;
    const topic = req.body.topic;
    const record = req.body.record;

    // Check if callTranscripts is properly defined
    if (Transcript) {
        // Assuming callTranscripts has a 'create' method
        Transcript.create({
            time,
            topic,
            record
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

router.get('/transcripts', async (req, res) => {
    const response = await Transcript.find({});

    res.json({
        Transcript : response
    })
})

module.exports = router;