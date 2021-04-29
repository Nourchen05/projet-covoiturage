import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { contactForm } from '../../JS/actions/contact'
import Image from '../../assets/images/coContact.svg'

import './contact.css'

function Contact() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: ""
    })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(contactForm(form))
        setForm({
            fullName: "",
            email: "",
            phone: "",
            message: ""
        })

    }

    return (
        <div className="home_contact">
            <div className="contact_contents">
                <h1>Contact us</h1>
                <form>
                    <input type="text"
                        value={form.fullname}
                        placeholder="Your Name"
                        name="fullname"
                        onChange={handleChange} />
                    <input type="text"
                        value={form.email}
                        placeholder="Your Email"
                        name="email"
                        onChange={handleChange} />
                    <input type="text"
                        value={form.phone}
                        placeholder="Your Phone"
                        name="phone"
                        onChange={handleChange} />
                    <textarea placeholder="Your Message ..."
                        value={form.message}
                        name="message"
                        onChange={handleChange} />
                    <button type="submit" className="btn" onClick={handleClick}>Send</button>
                </form>
            </div>
            <div className="contact_image">
                <img src={Image} alt="contact" />
            </div>
        </div>
    )
}

export default Contact
