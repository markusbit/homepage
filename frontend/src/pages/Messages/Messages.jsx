import React, { useEffect, useState } from "react";
import Message from "../../components/Message";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Messages = () => {
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
        const response = await fetch('/api/contact/messages', options);
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

    const handleDelete = async (messageId) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('user')}`
            }
        };

        const response = await fetch(`/api/contact/message/delete?${new URLSearchParams({id: messageId})}`, options);
        if (response.ok) {
            // Update the messages array after successful deletion
            setMessages((prevMessages) =>
                prevMessages.filter((message) => message._id !== messageId)
            );
            toast.success('Message deleted successfully', {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            const data = await response.text();
            toast.error(data, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    return (
        <div className="page-content">
            <ToastContainer />
            <h1 className="title">Messages</h1>
            <hr />
            {messages.map((message) => (
                <Message message={message} onDelete={handleDelete} key={message._id} />
            ))}
        </div>
    );
}

export default Messages; 
