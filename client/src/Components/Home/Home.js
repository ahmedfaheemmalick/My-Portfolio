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
                    <h6>Ahmed Faheem</h6>
                    <h1>I"m a Front end <br /> <span> developer</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque atque aliquam explicabo a, praesentium dolorem quisquam minus cumque quod rerum adipisci obcaecati, esse itaque repellat aspernatur debitis alias. Dolor, ipsum.</p>
                    <a className={styles.btn} href="#contact">CONTACT ME</a>
                </div>
            </div>
        </div>
    )
}

export default Home
