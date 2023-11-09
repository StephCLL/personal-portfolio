import { useRef, useState } from 'react';

import { Alert } from 'antd';

import emailjs from '@emailjs/browser'

import './contact.styles.css'

const Contact = () => {
  const form = useRef();

  const [submitted, changeSubmit] = useState(false);

  const onFinish = (values) => {
    values.preventDefault();
  
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        form.current.reset();
        changeSubmit(true)
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <section id="Contact" className="contact--section">
      {
        submitted &&
        <Alert message="Message sent! I will get back to you as soon as I can!" type="success" />
      }
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Thank you for checking out for portfolio!
        </p>
      </div>
      <form className="contact--form--container" ref={form} onSubmit={onFinish}>
        <div className="container">
          <label htmlFor="name" className="contact--label">
            <span className="text-md">Name*</span>
            <input
              type="text"
              className="contact--input text-md"
              name="from_name"
              id="name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email*</span>
            <input
              type="email"
              className="contact--input text-md"
              name="from_email"
              id="email"
              required
            />
          </label>
        </div>
        {/* <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label> */}
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        {/* <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label> */}
        <div>
          <button className="btn btn-primary contact--form--btn" type='submit'>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;