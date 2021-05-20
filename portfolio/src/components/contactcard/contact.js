import React from "react";

function ContactCard() {
    return (
        <div>
            <div className="mb-3">
                <label for="Name" className="form-label">Name</label>
                <input type="Name" className="form-control" id="nameinput" placeholder="Name" />
            </div>
            <div className="mb-3">
                <label for="Email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailinput" placeholder="Email@example.com" />
            </div>
            <div className="mb-3">
                <label for="Message" className="form-label">Message</label>
                <textarea className="form-control" id="messageinput"
                    placeholder="Say hello, write a message to Walter here!" rows="3">

                </textarea>
            </div>
        </div>

    )

}

export default ContactCard;