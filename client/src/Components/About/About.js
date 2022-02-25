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
                <h3 className={styles.head_2}>Hello! I"m Ahmed Faheem</h3>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus voluptas, temporibus iste odio impedit quasi explicabo similique magni facere, autem incidunt velit commodi illum placeat minima exercitationem provident nobis odit ipsum veniam maxime! Nulla fuga placeat magni hic nihil? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolor fugit recusandae dignissimos, molestiae natus iure ipsam aliquam officiis quam. </p>
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
