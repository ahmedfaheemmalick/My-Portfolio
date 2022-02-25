import { useState } from "react"
import logo from "../../Images/logo.svg"
import hamberger_1 from "../../Images/hamberger-1.svg"
import hamberger_2 from "../../Images/hamberger-2.svg"
import styles from "./Header.module.css"

const Header = () => {

    const [nav, setNav] = useState("close")

    const toogleNav = () => {
        nav === "close" ? setNav("open") : setNav("close")
    }

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.big_nav}>
                    <div className={`${nav === "close" ? styles.big_close_nav : styles.hide}`}>
                        <div>
                            <a href="#home">
                                <img src={logo} alt="Ahmed" />
                            </a>
                        </div>
                        <div>
                            <img className={styles.hamberger} src={hamberger_1} onClick={toogleNav} alt="hamberger" />
                        </div>
                    </div>
                    <div className={`${nav === "open" ? styles.big_open_nav : styles.hide}`}>
                        <div>
                            <ul>
                                <li><a href="#home">HOME</a></li>
                                <li><a href="#about">ABOUT</a></li>
                                <li><a href="#services">SERVICES</a></li>
                                <li><a href="#clients">TESTIMONIALS</a></li>
                                <li><a href="#works">WORKS</a></li>
                                <li><a href="#contact">CONTACT</a></li>
                            </ul>
                        </div>
                        <div>
                            <img className={styles.hamberger} src={hamberger_2} onClick={toogleNav} alt="hamberger" />
                        </div>
                    </div>
                </div>
                <div className={styles.small_nav}>
                    <div>
                        <a href="/">
                            <img src={logo} alt="Ahmed" />
                        </a>
                    </div>
                    <div className={styles.small_nav_right}>
                        <a href="#home">HOME</a>
                        <a href="#about">ABOUT</a>
                        <a href="#services">SERVICES</a>
                        <a href="#clients">TESTIMONIALS</a>
                        <a href="#works">WORKS</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header
