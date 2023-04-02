import React from "react";
import './contact.css';

function Contact() {
    return (
        <div className="page-content">
            <h2>Send me a message</h2>
            <form action="#" method="post">
                <div class="row">
                    <div class="col-md">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required></input>
                        <label for="tel">Telefon:</label>
                        <input type="tel" id="tel" name="tel" required></input>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required></input>
                    </div>
                    <div class="col-md">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="4" cols="40" required></textarea>
                        <button type="submit" className="btn btn-primary submit">Submit</button>
                    </div>
                </div>

            </form>


        </div>
    )
}

export default Contact; 