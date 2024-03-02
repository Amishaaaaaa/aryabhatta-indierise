import React from 'react';
import { useNavigate } from 'react-router-dom';


export function HomePage() {
    const navigate = useNavigate();
    const transcriptOnClick = () => {
        navigate('/transcripts');
      };
      const ContactOnClick = () => {
        navigate('/contact-details');
      };
    return (
        <div>
            <div style={{
                alignItems:"center",
                display:"flex",
                justifyContent:"center",
                fontSize:"25px",
                color:"darkgoldenrod"
            }}>
            <h1>Aryabhatta</h1>
            </div>

            <div style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                margin:"20px"
            }}>

                <div style={{
                    backgroundColor:"pink",
                    color:"white",
                    width:"100px",
                    height:"40px",
                    padding:"20px",
                    cursor:"pointer"
                }}>Aryabhatta V1 Logo</div>
                <div style={{
                    backgroundColor:"pink",
                    color:"white",
                    width:"100px",
                    height:"40px",
                    padding:"20px",
                    cursor:"pointer"
                }}>View your teachers (AI Agents)</div>
                <div style={{
                    backgroundColor:"pink",
                    color:"white",
                    width:"100px",
                    height:"40px",
                    padding:"20px",
                    cursor:"pointer"
                }} onClick={transcriptOnClick}>Call Transcripts</div>
                <div style={{
                    backgroundColor:"pink",
                    color:"white",
                    width:"100px",
                    height:"40px",
                    padding:"20px",
                    cursor:"pointer"
                }} onClick={ContactOnClick}>Contact Details</div>
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
                color:"White",
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