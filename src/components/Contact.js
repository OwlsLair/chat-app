import React from 'react';
import './Contact.css';

function Contact(){
    return (

        <figure className="Contact">
        <img className="avatar"
        src="https://randomuser.me/api/portraits/men/49.jpg"
        alt="Nelson Watson"/>
        <div className="status">
        <h4 className="name">Nelson Watson</h4>
        <div className="status-online"></div>
        <p className="status-text">Online</p>
        </div>
        </figure>
    );
}

export default Contact;