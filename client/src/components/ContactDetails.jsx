import React, { useEffect, useState } from 'react'

export function ContactDetails() {
    const [contact_details, setcontact_details] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/phoneNumber/numbers")
        .then(response => response.json())
        .then(data => {
          console.log("data from the backend:", data.phoneNumber);
          setcontact_details(data.phoneNumber);
        })
        .catch(err => console.log(err))
      }, []);
    return (
        <div>
        {Array.isArray(contact_details) && contact_details.map((contact_detail, index)=> (
          <div key={index}>
          <div style={{
            backgroundColor: "#F0F8FF"
          }}>
          <p>Time: {contact_detail.phoneNumber}</p>
          </div>
          </div>
        ))}
      </div>
    )
}