import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import  { useRef } from "react";
import emailjs from "emailjs-com"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_u0368xf', 'template_thrb0th', form.current, '93ahT1L8Oxgw47oIN')
        .e.target.reset();
      };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>techcacademy@gmail.com</h5>
            <a href="mailto:techcacademy@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Message</h4>
            <h5>Cikey Tong</h5>
            <a href="https://www.facebook.com/tong.chinh.3152">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BiPhoneCall className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+0329621710</h5>
            <a href="mailto:hocitcungdevc@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={e => sendEmail(e)}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
