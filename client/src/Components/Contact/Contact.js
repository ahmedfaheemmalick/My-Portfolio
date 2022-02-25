import { useState, useEffect } from "react"
import Aos from "aos"
import phone from "../../Images/phone.svg"
import mail from "../../Images/mail.svg"
import styles from "./Contact.module.css"

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [msg, setMsg] = useState("")
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    })

    useEffect(() => Aos.init({ duration: 2000, delay: 0, offset: 400 }))


    const sendEmail = e => {
        e.preventDefault();

        if (!values.name.trim()) {
            setErrors((prevState) => ({ ...prevState, name: "Name is required!" }))
        }
        if (!values.email.trim()) {
            setErrors((prevState) => ({ ...prevState, email: "Email is required!" }))
        }
        if (!values.message.trim()) {
            setErrors((prevState) => ({ ...prevState, message: "Message is required!" }))
        }
        if (values.email && !values.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setErrors((prevState) => ({ ...prevState, email: "Invalid email!" }))
        }

        if (values.name.trim() && values.email.trim() && values.message.trim()) {
            setIsLoading(true)
            fetch("/api/mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
                .then((res) => res.json())
                .then((data) => {
                    setIsLoading(false)
                    setMsg(data.msg)
                    setValues({
                        name: "",
                        email: "",
                        message: "",
                    })
                    setTimeout(() => setMsg(""), 2000)
                })
                .catch((err) => {
                    setIsLoading(false)
                    setMsg(err.msg)
                })
        }
    }

    return (
        <div id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h1 className={styles.head}>Contact <span>Me</span></h1>
                <p className={styles.para}>Let"s talk business.</p>
                <div data-aos="fade-down" className={styles.card_wrapper}>
                    <div className={styles.card}>
                        <img className={styles.img} src={phone} alt="Phone" />
                        <h1>Call Me On</h1>
                        <h6>
                            <a href="tel:+923433159899">
                                +92-343 3159899
                            </a>
                        </h6>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.img} src={mail} alt="Mail" />
                        <h1>Email Me At</h1>
                        <h6>
                            <a href="mailto:ahmedfaheemmalick@gmail.com">ahmedfaheemmalick@gmail.com</a>
                        </h6>
                    </div>
                </div>
                <form onSubmit={e => sendEmail(e)}>
                    <div className={styles.input_wrap}>
                        <div>
                            <input
                                value={values.name}
                                type="text"
                                name="name"
                                onChange={e => {
                                    setValues({ ...values, name: e.target.value })
                                    setErrors((prevState) => ({ ...prevState, name: "" }))
                                }}
                                placeholder="Your Name"
                            />
                            {errors.name &&
                                <div className={styles.error_text}>
                                    <span>{errors.name}</span>
                                </div>
                            }
                        </div>
                        <div>
                            <input
                                value={values.email}
                                type="text"
                                name="email"
                                onChange={e => {
                                    setValues({ ...values, email: e.target.value })
                                    setErrors((prevState) => ({ ...prevState, email: "" }))
                                }}
                                placeholder="Your Email"
                            />
                            {errors.email &&
                                <div className={styles.error_text}>
                                    <span>{errors.email}</span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={styles.textarea_wrap}>
                        <div>
                            <textarea
                                value={values.message}
                                name="message"
                                placeholder="Your Message..."
                                onChange={e => {
                                    setValues({ ...values, message: e.target.value })
                                    setErrors((prevState) => ({ ...prevState, message: "" }))
                                }}
                            />
                            {errors.message &&
                                <div className={styles.error_text}>
                                    <span>{errors.message}</span>
                                </div>
                            }
                        </div>
                    </div>
                    {msg && msg === "Message sent successfully." ?
                        <div className={styles.success_msg}>
                            <span>{msg}</span>
                        </div>
                        :
                        <div className={styles.error_msg}>
                            <span>{msg}</span>
                        </div>
                    }
                    <div className={styles.btn}>
                        {!isLoading ?
                            <button>Send Message</button> :
                            <div className={styles.lds_ripple}>
                                <div></div>
                                <div></div>
                            </div>
                        }
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Contact
