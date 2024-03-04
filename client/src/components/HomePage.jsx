import React from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from './aryabhatta-logo.jpg';
import SplitPane from "react-split-pane";
import { useEffect, useState } from 'react'

export function HomePage() {
    const navigate = useNavigate();
    const transcriptOnClick = () => {
        navigate('/callHistory');
      };
      const ContactOnClick = () => {
        navigate('/userDetails');
      };

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
        <body>
            <SplitPane split="vertical" minSize={200} maxSize={300} defaultSize={300} primary="first" >
                <div className="left">
                <div className="top-left" >AI Agents</div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
                    {Array.isArray(transcripts) && transcripts.map((transcript, index)=> (
                    <p style={{display:"flex",
                        justifyContent:"center",
                        fontFamily: 'Arial',
                        fontSize:"20px"}}>{transcript.Agent}</p>
                    ))}
                </div>
                </div>
                </div>
                <div className="right">
                <div className='heading'><img src={myImage} alt="aryabhatta-logo" 
            style={{ marginTop:"-20px" ,maxWidth: '7%', maxHeight: '7%', marginLeft:"20px", borderRadius:"20%" }}
            />
            <h1>Aryabhatta</h1>
            <h3 style={{
                marginTop:"49px"
            }}>By IndieRise</h3>
            </div>

            <div className='outer-container'>
                <div className='inner-container' onClick={transcriptOnClick}>Call History</div>
                <div className='inner-container' onClick={ContactOnClick}>User Details</div>
                <div className='inner-container'>LLM Playground</div>
            </div>
            <div style={{
                marginTop:"80px",
                marginLeft:"220px"
            }}>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"center"
            }}>
            <div style={{
                margin:"40px",
                backgroundColor:"lightcyan",
                marginColor:"lightskyblue",
                height:"350px",
                width:"800px",
                borderRadius:"10px"
            }}>
            </div>
            </div>
                </div>
            </SplitPane>
            </body>
    )
}
