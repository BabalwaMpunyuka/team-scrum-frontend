import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
// import Icons from '../icons/Icons';

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const SendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ftm6ivd",
        "template_k64m696",
        e.target,
        "user_z8VmGAWrBS5lyUwIEtHzP"
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));

    setFullName("");
    setEmail("");
    setCompany("");
    setDescription("");

    alert("Message Sent Successfully.");
  };

  return (
    <form className="contact-form" onSubmit={SendEmail}>
      <div className="container">
        <h1 className="text-center mb-4">Contact us</h1>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            name="userEmail"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="company"
            placeholder="Company"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="description"
            cols="30"
            rows="10"
            placeholder="Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="d-flex w-100 align-items-center justify-content-center">
        <button type="submit" className="btn btn-lg btn-block text-capitalize">
          submit
        </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
