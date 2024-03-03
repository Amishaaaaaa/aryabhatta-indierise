import React, { useEffect, useState } from 'react'

export function AiAgents() {
    const [transcripts, setTranscripts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/ai_agents/")
        .then(response => response.json())
        .then(data => {
          console.log("data from the backend:", data.msg);
          setTranscripts(data.msg);
        })
        .catch(err => console.log(err))
      }, []);
    return (
        <div>
          <h1>Call History</h1>
        {Array.isArray(transcripts) && transcripts.map((transcript, index)=> (
          <div key={index}>
          <div style={{
            backgroundColor: "#F0F8FF"
          }}>
          <h2>Topic: {transcript.Agent}</h2><br></br>
          </div>
          </div>
        ))}
      </div>
    )
}