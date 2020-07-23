import React from "react"


const ContactForm = () => {
  return (
        <article className="contact-form">
          <h4 className="text-large">Get in touch!</h4>
          <form action="https://formspree.io/YOUR_ID" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
   
  
  )
}

export default ContactForm