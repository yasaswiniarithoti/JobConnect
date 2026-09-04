import React, { useState } from "react";
import axios from "axios";

import "./contact.css";

const Contact = () => {

  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [Subject, setSubject] = useState("");
  let [Message, setMessage] = useState("");

  let url = "http://localhost:3000/messages";

  let data = {
    Name,
    Email,
    Subject,
    Message
  };

  const sendMessage = (e) => {

    e.preventDefault();

    if (!Name || !Email || !Subject || !Message) {
      alert("Please enter all the fields");
      return;
    }

    axios.post(url, data)
      .then((res) => {
        alert("Message sent successfully");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        alert("Message failed to send");
      });

  };

  return (
    <div className="contact-page">

      <section className="contact-header">

        <p>GET IN TOUCH</p>

        <h1>Contact Us</h1>

        <span>
          Have a question or need help? We'd love to hear from you.
          Send us a message and we'll get back to you soon.
        </span>

      </section>


      <section className="contact-content">

        <div className="contact-info-section">

          <h2>Let's Talk</h2>

          <p>
            Whether you have a question about JobConnect, need
            support, or simply want to share your feedback, feel
            free to reach out to us.
          </p>


          <div className="contact-info-card">

            <div className="contact-icon">
              📧
            </div>

            <div>
              <h3>Email</h3>
              <p>support@jobconnect.com</p>
            </div>

          </div>


          <div className="contact-info-card">

            <div className="contact-icon">
              📞
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 90807 06050</p>
            </div>

          </div>


          <div className="contact-info-card">

            <div className="contact-icon">
              📍
            </div>

            <div>
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>

          </div>

        </div>


        <div className="contact-form-card">

          <h2>Send Us a Message</h2>

          <form onSubmit={sendMessage}>

            <label htmlFor="name">
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />


            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />


            <label htmlFor="subject">
              Subject
            </label>

            <input
              id="subject"
              type="text"
              placeholder="Enter subject"
              value={Subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />


            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              rows="6"
              placeholder="Write your message..."
              value={Message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>


            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  );
};

export default Contact;