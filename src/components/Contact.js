import React from 'react'
import ContactForm from './ContactForm'
import SectionTitle from './SectionTitle'

const ContactSection = ({pretitle, className, title, subtitle}) => {
    return (
        <div className="contact-page contact-section">
{/* <SectionTitle title={title} pretitle={pretitle} className={className} subtitle = {subtitle}/> */}
            <ContactForm />
        </div>
    )
}

export default ContactSection
