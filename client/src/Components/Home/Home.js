import { useEffect } from "react"
import Aos from "aos"
import man from "../../Images/man.png"
import styles from "./Home.module.css"

const Home = () => {

    useEffect(() => Aos.init({ duration: 2000, delay: 0, offset: 400 }))

    return (
        <div id="home" className={styles.home}>
            <div className={styles.container}>
                <div data-aos="fade-right" className={styles.home_left}>
                    <img src={man} alt="Ahmed Faheem" />
                </div>
                <div data-aos="fade-left" className={styles.home_right}>
                    <h6>Ahmed Faheem Malick</h6>
                    <h1>I'm a Full stack(MERN, JAM) <br /> <span> developer</span></h1>
                    <p>A self-motivated and self-taught full-stack(MERN, JAM) developer following his passion by converting thoughts into something people can really interact with.</p>
                    <a className={styles.btn} href="#contact">CONTACT ME</a>
                </div>
            </div>
        </div>
    )
}

export default Home
