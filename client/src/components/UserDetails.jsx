import React, { useEffect, useState } from 'react'

export function UserDetails() {
    const [contact_details, setcontact_details] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/user_details/")
        .then(response => response.json())
        .then(data => {
          console.log("data from the backend:", data.msg);
          setcontact_details(data.msg);
        })
        .catch(err => console.log(err))
      }, []);
    return (
        <div>
          <h1>User Details</h1>
        {Array.isArray(contact_details) && contact_details.map((contact_detail, index)=> (
          <div key={index}>
          <div style={{
            backgroundColor: "#F0F8FF"
          }}>
          <p>Username: {contact_detail.Username}</p>
          <p>Contact Number: {contact_detail.PhoneNumber}</p>
          <p>Profession: {contact_detail.Profession}</p>
          <p>Organisation: {contact_detail.Organisation}</p>
          </div>
          </div>
        ))}
      </div>
    )
}