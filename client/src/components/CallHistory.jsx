import React, { useEffect, useState } from 'react'

export function CallHistory() {
    const [transcripts, setTranscripts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/call_history/")
        .then(response => response.json())
        .then(data => {
          console.log("data from the backend:", data.Call_history);
          setTranscripts(data.Call_history);
        })
        .catch(err => console.log(err))
      }, []);
    return (
        <div>
          <h1>Call History</h1>
        {Array.isArray(transcripts) && transcripts.map((transcript, index)=> (
          <div key={index}>
          <div style={{
            backgroundColor: "#F0F8FF",
            padding:"5px",
            margin:"5px"
          }}>
          <h2>Topic: {transcript.Topic}</h2>
          <p><b>Time: </b>{transcript.Time}<br/></p>
          <p><b>Agent Used:</b> {transcript.AgentUsed}</p>
          <p><b>Duration: </b>{transcript.Duration}</p>
          <p><b>Transcript: </b>{transcript.Transcript}</p>
          </div>
          </div>
        ))}
      </div>
    )
}