import { useEffect } from "react";
import Aos from "aos"
import { ReactComponent as Facebook } from "../../Images/facebook.svg"
import { ReactComponent as Twitter } from "../../Images/twitter.svg"
import { ReactComponent as Linkedin } from "../../Images/linkedin.svg"
import { ReactComponent as Github } from "../../Images/github.svg"
import { ReactComponent as Instagram } from "../../Images/instagram.svg"
import man from "../../Images/man-2.png"
import styles from "./About.module.css"

const About = () => {

    useEffect(() => Aos.init({ duration: 2000, delay: 0, offset: 400 }))

    return (
        <div id="about" className={styles.about}>
            <div data-aos="fade-up" className={styles.left}>
                <img src={man} alt="" />
            </div>
            <div data-aos="fade-down" className={styles.right}>
                <h1 className={styles.head_1}>About <span>Me</span></h1>
                <h3 className={styles.head_2}>Hello! My self Ahmed Faheem Malick</h3>
                <p className={styles.para}>
                    I'm a Full Stack Web Developer with a passion for creating beautiful and intuitive user experiences. I have over two years of experience in developing sites using edge cutting technologies like Javascript, Typescript, React, Gatsby, Graphql, Node.js, Express Js, MongoDB, FaunaDB, and more.

                    <br />
                    <br />

                    To conclude, I would say that I'm a creative, hard-working, and dedicated individual. I'm a team player who is always willing to learn new technologies and improve my skills.
                </p>
                <div className={styles.socials}>
                    <a href="https://github.com/ahmedfaheemmalick">
                        <Github className={styles.icon} />
                    </a>
                    <a href="https://www.facebook.com/ahmedfaheemmalick">
                        <Facebook className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/ahmedfaheemmalick">
                        <Instagram className={styles.icon} />
                    </a>
                    <a href="https://twitter.com/ahmedfaheemmali">
                        <Twitter className={styles.icon} />
                    </a>
                    <a href="https://www.linkedin.com/in/ahmedfaheemmalick">
                        <Linkedin className={styles.icon} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
