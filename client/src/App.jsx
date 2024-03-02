import { useState } from 'react'
import { useEffect } from 'react';

function App() {
  const [transcripts, setTranscripts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/callTranscript/transcripts")
    .then(response => response.json())
    .then(data => {
      console.log("data from the backend:", data.Transcript);
      setTranscripts(data.Transcript);
    })
    .catch(err => console.log(err))
  }, []);
  return (
      <div>
        {/* <Transcripts transcripts={ transcripts }></Transcripts> */}
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
export default App