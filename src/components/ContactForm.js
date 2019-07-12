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
    console.log(e);
    setformValue( { [ e.target.name ] : e.target.value } );
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
        <label className="form-label form-name">Your name</label>
        <div className="form-input-outerdiv">
          <input 
            id="name"
            name="name"
            className="form-input-name"
            type="text"
            value={ formValue.name }
            onChange={ handleChange }
            placeholder="  John Jonson"
          />
        </div>
        
      </div>
    </form>
  )
}

export default ContactForm;