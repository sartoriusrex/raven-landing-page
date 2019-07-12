import React, { useState } from 'react';

import "./ContactForm.css";

const ContactForm = () => {

  const [ formValue, setformValue ] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = e => {
    setformValue( { ...formValue, [ e.target.name ] : e.target.value } );
  }

  const onSubmit = e => {
    e.preventDefault();
  }

  return(
    <form 
      className="contact-form"
      onSubmit={ onSubmit }
    >
      <div className="form-element-container">
        <label className="form-label-name">Your name</label>
        <div className="form-input-outerdiv">
          <input 
            id="name"
            name="name"
            className="form-input-name"
            type="text"
            value={ formValue.name }
            onChange={ handleChange }
            placeholder="John Jonson"
            autoComplete="off"
          />
        </div>
        <label className="form-label-phone">Your phone</label>
        <input
          id="phone"
          name="phone"
          className="form-input-phone"
          type="phone"
          value={ formValue.phone }
          onChange={ handleChange }
          placeholder="560-4675"
          autoComplete="off"
        />
        <div className="uk-flag-form"></div>
        <div className="contact-dropdown"></div>
        <label className="form-label-email">Email</label>
        <input
          id="email"
          name="email"
          className="form-input-email"
          type="email"
          value={ formValue.email }
          onChange={ handleChange }
          placeholder="John.i@mail.com"
          autoComplete="off"
        />
        <label className="form-label-message">Message</label>
        <textarea
          id="message"
          name="message"
          type="text"
          value={ formValue.message }
          onChange={ handleChange }
          placeholder="Write us something"
          className="form-input-message"
          autoComplete="off"
        />
      </div>
      <button className="form-submit-button"><span className="form-button-text">SEND A MESSAGE</span></button>
    </form>
  )
}

export default ContactForm;