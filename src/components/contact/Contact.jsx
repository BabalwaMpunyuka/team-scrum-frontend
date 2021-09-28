import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
// import '../Styles/Contact.css';
import './Contact.css';
// import Button from '../../components/form/button/Button'
import Button from '../form/button/Button';

const Contact = () => {
    
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    
    const SendEmail =(e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_ftm6ivd', 
            'template_k64m696',
             e.target,            
            'user_z8VmGAWrBS5lyUwIEtHzP'
            ).then(response=>{
                console.log(response)
            }).catch(err => console.log(err));

    setFullName("");
    setEmail("");
    setCompany("");
    setDescription("");

    alert("Message Sent Successfully.");
  };
    return (
        <form className="contact-form" onSubmit={SendEmail}> 
            <div className="container">
                <h1 className="text-uppercase text-center mb-4">contact us</h1>
            <div className="mb-3">
                <input className="form-control" 
                type="text" name="name" 
                placeholder="Full Name" 
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input className="form-control" 
                type="email" name="userEmail"
                 placeholder="Email Address"
                 required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input className="form-control" 
                type="text" name="company"
                 placeholder="Company" 
                 required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                 />
            </div>
            <div className="mb-4">
                <textarea className="form-control" 
                name="description"
                 cols="30" rows="10"
                placeholder="Description"
                required 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
           {/* <button type="submit" className="btn btnPrimary">submit</button> */}
           <div className="text-center">
                <Button type="button" variant="primary-outline">
                    submit
                </Button>
           </div>
        </div>
     </form>

        
    )
}

export default Contact;
