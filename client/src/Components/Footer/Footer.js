import { ReactComponent as Facebook } from "../../Images/facebook.svg"
import { ReactComponent as Twitter } from "../../Images/twitter.svg"
import { ReactComponent as Linkedin } from "../../Images/linkedin.svg"
import { ReactComponent as Github } from "../../Images/github.svg"
import { ReactComponent as Instagram } from "../../Images/instagram.svg"
import logo from "../../Images/logo.svg"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <a href="#home">
                <img className={styles.footer_logo} src={logo} alt="" />
            </a>
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
            <p>Copyright 2021 &copy; Ahmed Faheem. All rights Reserved.</p>
        </footer>
    )
}

export default Footer
