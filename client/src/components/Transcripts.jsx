import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function FetchData() {
    const [data, setData] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:5000/callTranscript/transcripts")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
    return (
    <div className='container'>
        {
        data.map((user, index) => {
            return <div>
                {user.time}
            </div>
        })
    }
    </div>
    )
}