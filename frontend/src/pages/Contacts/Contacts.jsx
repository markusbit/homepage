import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [contacts, setContacts] = useState([]); 

    useEffect(() => {
        getAllContacts(); 
    }, []); 

    const getAllContacts = async () => {
        const response = await fetch('/api/contact/contacts'); 
        const data = await response.json(); 
        setContacts(data); 
        console.log(data); 
    } 

    return(
        <div className="page-content">
            Contacts
            {
                contacts.map((contact) => {
                    
                })
            }
        </div>
    ); 
}

export default Dashboard; 