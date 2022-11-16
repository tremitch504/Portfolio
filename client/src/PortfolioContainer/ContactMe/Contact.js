import React from "react";
import './ContactMe.css'
// the h5 are being acted as the same
const ContactMe = () => {

    return (
        <div className="contact">
      <h5 className="contact-header">Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-options">

            <article className="contact-option">
            <i class="bi bi-envelope"></i>
                <h4>Email</h4>
                <h5 className="email-header">trevonmitch504@gmail.com</h5>
                <a href="mailto:trevonmitch504@gmail.com" target='_blank' rel="noreferrer" >Send a message</a>
            </article>
            <article className="contact-option">
            <i class="bi bi-twitter"></i>
                <h4>Twitter</h4>
                <h5 className="email-header">@Bruce77001275</h5>
                <a href="https://twitter.com/Bruce77001275" target='_blank' rel="noreferrer">Send a message</a>
            </article>
            <article className="contact-option">
            <i class="bi bi-linkedin"></i>
                <h4>LinkedIn</h4>
                <h5 className="email-header">Tre'von Mitchell</h5>
                <a href="https://www.linkedin.com/in/tre-mitch/" target='_blank' rel="noreferrer">Send a message</a>
            </article>
         </div>
            {/* {"End of the options"} */}
            <form action="">
              <input type="text" name='name' placeholder="Your Full Name" required />
              <input type="email" name='email' placeholder="Your Email" required />
               <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type='submit' className="btn btn-primary">Send Message</button>
            </form>
        </div>

        </div>
    )
}


export default ContactMe;