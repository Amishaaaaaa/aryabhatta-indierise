import React from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from './aryabhatta-logo.jpg';
// import { Container, Row, Col } from 'react-bootstrap';

export function HomePage() {
    const navigate = useNavigate();
    const transcriptOnClick = () => {
        navigate('/callHistory');
      };
      const ContactOnClick = () => {
        navigate('/userDetails');
      };
    return (
        <div>
            <div style={{
                alignItems:"center",
                display:"flex",
                fontSize:"30px",
                gap: "20px",
                color:"black"
            }}><img 
            src={myImage} 
            alt="aryabhatta-logo" 
            style={{ maxWidth: '10%', maxHeight: '10%', display: 'block' }}
            />
            <h1>Aryabhatta</h1>
            </div>

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

            <div style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                margin:"20px"
            }}>

                {/* <div style={{
                    backgroundColor:"pink",
                    color:"white",
                    width:"100px",
                    height:"40px",
                    padding:"20px",
                    cursor:"pointer"
                }}></div> */}
                <div style={{
                    backgroundColor:"pink",
                    color:"white",
                    width:"100px",
                    height:"30px",
                    padding:"20px",
                    cursor:"pointer"
                }}>AI Agents</div>
                <div style={{
                    backgroundColor:"pink",
                    color:"white",
                    width:"100px",
                    height:"30px",
                    padding:"20px",
                    cursor:"pointer"
                }} onClick={transcriptOnClick}>Call History</div>
                <div style={{
                    backgroundColor:"pink",
                    color:"white",
                    width:"100px",
                    height:"30px",
                    padding:"20px",
                    cursor:"pointer"
                }} onClick={ContactOnClick}>User Details</div>
            </div>
            <div style={{
                marginTop:"80px",
                display:"flex",
                justifyContent:"center"
            }}>
            <div style={{
                display:"flex",
                justifyContent:"center",
                color:"white",
                width:"130px",
                height:"20px",
                padding:"20px",
                backgroundColor:"pink",
                cursor:"pointer"
            }}>
                LLM Playground
            </div>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"center"
            }}>
            <div style={{
                backgroundColor:"lightskyblue",
                height:"300px",
                width:"800px",
                marginTop:"20px"
            }}>
            </div>
            </div>
        </div>
    )
}