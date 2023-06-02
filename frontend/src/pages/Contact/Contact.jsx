import React from "react";
import './contact.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Contact() {

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObj),
            });

            if (response.ok) {
                const data = await response.text();
                console.log(data);
                toast.success(data, {
                    position: toast.POSITION.TOP_RIGHT,
                });
                event.target.reset();
            } else {
                let errorMessage = '';
                const contentType = response.headers.get('content-type');

                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    errorMessage = errorData.errors[0].msg;
                } else {
                    errorMessage = await response.text();
                }
                throw new Error(errorMessage); // Error handling
            }
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } 
    }


    return (
        <div className="page-content">
            <ToastContainer />
            <h2>Send me a message</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="tel">Tel:</label>
                        <input type="tel" id="tel" name="tel" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="col-md">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="msg" rows="4" cols="40" required></textarea>
                        <button type="submit" className="btn btn-primary submit">Submit <FontAwesomeIcon icon={faPaperPlane}/></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;
