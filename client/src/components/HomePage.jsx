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
                <div style={{
                    backgroundColor:"white",
                    fontSize:"30px",
                    color:"black",
                    padding:"20px",
                    display:"flex",
                    height:"70px",
                    justifyContent:"center",
                    alignItems:"center"
                }} >AI Agents</div>

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
                <div style={{
                alignItems:"center",
                display:"flex",
                fontSize:"30px",
                gap: "20px",
                color:"black"
            }}><img 
            src={myImage} 
            alt="aryabhatta-logo" 
            style={{ marginTop:"-20px" ,maxWidth: '7%', maxHeight: '7%', marginLeft:"20px", borderRadius:"20%" }}
            />
            <h1>Aryabhatta</h1>
            <h3 style={{
                marginTop:"49px"
            }}>By IndieRise</h3>
            </div>

            <div style={{
                display:"flex",
                justifyContent: "space-around",
                alignItems:"center",
                margin:"20px"
            }}>
                
                <div style={{
                    backgroundColor:"white",
                    color:"black",
                    width:"100px",
                    height:"30px",
                    padding:"20px",
                    cursor:"pointer",
                    borderRadius:"8%",
                    fontSize:"19px",
                    fontWeight:"bold",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }} onClick={transcriptOnClick}>Call History</div>
                <div style={{
                    backgroundColor:"white",
                    color:"black",
                    width:"100px",
                    height:"30px",
                    padding:"20px",
                    cursor:"pointer",
                    borderRadius:"8%",
                    fontSize:"19px",
                    fontWeight:"bold",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }} onClick={ContactOnClick}>User Details</div>
            </div>
            <div style={{
                marginTop:"80px",
                marginLeft:"220px"
            }}>
            {/* <div style={{
                display:"flex",
                justifyContent:"l",
                color:"black",
                width:"130px",
                height:"20px",
                padding:"20px",
                backgroundColor:"white",
                cursor:"pointer",
                borderRadius:"5%"
            }}>
                LLM Playground
            </div> */}
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
                width:"800px",
                marginTop:"40px",
            }}>
            </div>
            </div>
                </div>
            </SplitPane>
            </body>
    )
}


            {/* <Container>
                <Row style={{
                    border:"2px solid red"
                }}>
                    <Col style={{
                        border:"2px solid black"
                    }} lg={8}>fdfdbb1</Col>
                    <Col style={{
                        border:"2px solid black"
                    }} lg={4}>bfdbdb2</Col>
                </Row>
                <Row style={{
                    border:"2px solid red"
                }}>
                    <Col style={{
                        border:"2px solid black"
                    }}>efswg</Col>
                    <Col style={{
                        border:"2px solid black"
                    }}>edbdxb</Col>
                    <Col style={{
                        border:"2px solid black"
                    }}>edvdvsxv</Col>
                </Row>
            </Container> */}

            {/* <div style={{
                    backgroundColor:"pink",
                    color:"white",
                    width:"100px",
                    height:"30px",
                    padding:"20px",
                    cursor:"pointer"
                }} onClick={agentOnClick} >AI Agents</div> */}

                {/* <div style={{
                    backgroundColor:"pink",
                    color:"white",
                    width:"100px",
                    height:"40px",
                    padding:"20px",
                    cursor:"pointer"
                }}></div> */}