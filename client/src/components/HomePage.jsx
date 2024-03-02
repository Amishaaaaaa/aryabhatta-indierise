export function HomePage() {
    return (
        <div>
            <div style={{
                alignItems:"center",
                display:"flex",
                justifyContent:"center",
                fontSize:"25px"
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
                    backgroundColor:"gray",
                    color:"white",
                    width:"100px",
                    height:"40px",
                    padding:"20px"
                }}>Aryabhatta V1 Logo</div>
                <div style={{
                    backgroundColor:"gray",
                    color:"white",
                    width:"100px",
                    height:"40px",
                    padding:"20px"
                }}>View your teachers (AI Agents)</div>
                <div style={{
                    backgroundColor:"gray",
                    color:"white",
                    width:"100px",
                    height:"40px",
                    padding:"20px"
                }}>Call Transcripts</div>
                <div style={{
                    backgroundColor:"gray",
                    color:"white",
                    width:"100px",
                    height:"40px",
                    padding:"20px"
                }}>Contact Details</div>
            </div>
            <div style={{
                marginTop:"80px",
                display:"flex",
                justifyContent:"center"
            }}>
            <div style={{
                display:"flex",
                justifyContent:"center",
                backgroundColor:"gray",
                color:"white",
                width:"130px",
                height:"20px",
                padding:"20px",
                backgroundColor:"white",
                color:"Black"
            }}>
                LLM Playground
            </div>
            </div>
        </div>
    )
}