import React, { useEffect, useState } from "react";
import Message from "../../components/Message";

const Dashboard = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getAllMessages();
    }, []);

    const getAllMessages = async () => {
        const response = await fetch('/api/contact/messages');
        console.log(response); 
        const data = await response.json();
        setMessages(data);
        console.log(data);
    }

    return (
        <div className="page-content">
            <h1 className="title">Messages</h1>
            <hr />
            {messages.map((message) => (
                <Message message={message} />
            ))}
        </div>
    );
}

export default Dashboard; 
