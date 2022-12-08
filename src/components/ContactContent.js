import "./ContactContentStyles.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine, RiInstagramLine } from "react-icons/ri"
import emailjs from "emailjs-com"

import React, { useRef } from "react";

const ContactContent = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_crukp6f', 'template_l84034d', form.current, 'GegWcpmW-kLxG95PL')

        e.target.reset()
    };
    return (
        <section id="contact">
            <div className="contact-title">Contact Information</div>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail size={30} style={{ color: "#fff", margin: "auto" }} />
                        <h4>Email</h4>
                        <h5>thuyvy76207@gmail</h5>
                        <a href="mailto:thuyvy76207@gmail.com" style={{ color: "#efb944" }}>Send a message</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerLine size={30} style={{ color: "#fff", margin: "auto" }} />
                        <h4>Message</h4>
                        <h5>Thuyvy76207</h5>
                        <a href="https://m.me/ThuyVi76207" style={{ color: "#efb944" }}>Send a message</a>
                    </article>
                    <article className="contact_option">
                        <RiInstagramLine size={30} style={{ color: "#fff", margin: "auto" }} />
                        <h4>Instagram</h4>
                        <h5>thuyvi_rua02</h5>
                        <a href="https://www.instagram.com/thuyvi_rua02/" style={{ color: "#efb944" }}>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>

    )
}

export default ContactContent