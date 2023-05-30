import React, { useEffect, useState } from "react";
import Contact from "../../components/Contact";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contacts = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getAllMessages();
    }, []);

    const getAllMessages = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('user')}`
            }
        }
        const response = await fetch('/api/contact/contacts', options);
        if (response.ok) {
            const data = await response.json();
            setMessages(data);
        } else {
            const data = await response.text();
            toast.error(data, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }

    return (
        <div className="page-content">
            <ToastContainer />
            <h1 className="title">Contacts</h1>
            <hr />
            {messages.map((contact) => (
                <Contact contact={contact} key={contact._id} />
            ))}
        </div>
    );
}

export default Contacts; 
