import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/auth/login', {
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

    return(
        <div className="page-content">
            <ToastContainer />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md">
                        <label>Username:</label>
                        <input type="text" id="username" name="username" required></input>
                        <label>Password:</label>
                        <input type="password" id="password" name="password" required></input>
                        <button type="submit" className="btn btn-primary submit">Log In</button>
                    </div>
                </div>
            </form>
        </div>
    ); 
}

export default Login; 