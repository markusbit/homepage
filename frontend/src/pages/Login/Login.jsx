import React from "react";

const Login = () => {

    async function handleSubmit() {
        try {
            await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
                }).then(function(response){
                    console.log(response)
                    return response.json();
                });
            }
        catch (error){
            console.log(error);
        }
    }

    return(
        <div className="page-content">
            <h2>Login</h2>
            <form action="/api/contact/new" method="post">
                <div class="row">
                    <div class="col-md">
                        <label for="name">Username:</label>
                        <input type="text" id="username" name="username" required></input>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required></input>
                    </div>
                </div>

            </form>
        </div>
    ); 
}

export default Login; 