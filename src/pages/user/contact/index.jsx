import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdEmail, MdOutlinePhoneAndroid } from 'react-icons/md'

function Contact() {

    const [disabledInput, setDisabledInput] = useState(false)
    // const [notification, setNotification] = useState(false)

    const form = useRef()
    const notfi = useRef()

    const sendMail = (e) => {
        e.preventDefault()
        setDisabledInput(true)

        emailjs.sendForm("service_ox4oi9z",
            "template_q7xasmx",
            form.current,
            "uYd3WYVPMQu9i3V7u"
        )
            .then(res => {
                if (res.status === 200) {
                    setDisabledInput(false)
                    notfi.current.style.display = "block"
                    // setNotification(true)
                    
                    setTimeout(() => notfi.current.style.display = "none", 1000)
                    form.current.fullname.value = "";
                    form.current.useremail.value = "";
                    form.current.subject.value = "";
                    form.current.description.value = "";

                }
            })


    }
    return (
        <section id="contact">
            <div className="notification" ref={notfi}>
                Successfull
            </div>
            <div className="container">

                <div className="row justify-content-center text-center">
                    <div className="section-heading">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="contact-box">
                            <div className="icon">
                                <MdOutlinePhoneAndroid />
                            </div>
                            <h3>Phone number</h3>
                            <p>+994556667788</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="contact-box">
                            <div className="icon">
                                <MdEmail />
                            </div>
                            <h3>E-mail</h3>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="contact-box">
                            <div className="icon">
                                <FaMapLocationDot />
                            </div>
                            <h3>Location</h3>
                            <p>Qələbə Residence, Abbas Mirzə Şərifzadə küç. 144, Bakı, Azərbaycan.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 contact-form">
                        <form onSubmit={sendMail} ref={form}>
                            <input type="text" id='fullname' name='fullname'
                                placeholder='Your Full name...' required disabled={disabledInput} />
                            <br />
                            <input type="email" id='useremail' name='useremail'
                                placeholder='Your email address ....' required disabled={disabledInput} />
                            <br />
                            <input type="text" id='subject' name='subject'
                                placeholder='Enter Subject ....' required disabled={disabledInput} />
                            <br />
                            <textarea id='description' name='description'
                                placeholder='Enter Description ....' required disabled={disabledInput} />
                            <br />
                            <input type="submit" disabled={disabledInput} />
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact