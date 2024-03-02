import React, { useEffect, useState } from 'react'

export function Transcripts() {
    const [transcripts, setTranscripts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/callTranscript/transcripts")
        .then(response => response.json())
        .then(data => {
        //   console.log("data from the backend:", data.Transcript);
          setTranscripts(data.Transcript);
        })
        .catch(err => console.log(err))
      }, []);
    return (
        <div>
        {Array.isArray(transcripts) && transcripts.map((transcript, index)=> (
          <div key={index}>
          <div style={{
            backgroundColor: "#F0F8FF"
          }}>
          <p>Time: {transcript.time}<br/>
          <h2>Topic: {transcript.topic}</h2><br/>
          {transcript.record}</p>
          </div>
          </div>
        ))}
      </div>
    )
}