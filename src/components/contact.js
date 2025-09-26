import React, { useState } from "react";
import emailjs from "emailjs-com";
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email via EmailJS
        emailjs
            .send(
                "service_mahi215",
                "template_mahi215",
                formData,
                "czimXRS0tBMazGpKl"
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                    setFormData({ name: "", email: "", mobile: "", message: "" });
                },
                (error) => {
                    alert("Error sending message: " + error.text);
                }
            );
    };

    return (
        <div className="contact-form" id="contact">
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
                <p>or</p>
                <a href="https://wa.me/919391759475" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                </a>

            </form>
        </div>
    );
};

export default Contact;
