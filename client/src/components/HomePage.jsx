import React from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from './aryabhatta-logo.jpg';
// import { Container, Row, Col } from 'react-bootstrap';
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
            <SplitPane split="vertical" minSize={280} maxSize={280} >
                <div className="left" style={{height:"100%" }}>
                <div className="top-left" >AI Agents</div>

                <div>
                    {Array.isArray(transcripts) && transcripts.map((transcript, index)=> (
                    <div key={index}>
                    <h2 style={{
                        display:"flex",
                        justifyContent:"center"
                    }}>{transcript.Agent}</h2><br></br>
                    </div>
                    ))}
                </div>
                </div>
                <div className="right" style={{backgroundColor:"pink",height:"100%"}}>
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
                height:"300px",
                width:"800px"
            }}>
            </div>
            </div>
                </div>
            </SplitPane>
            </body>
    )
}
