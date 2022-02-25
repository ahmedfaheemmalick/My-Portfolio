import { useEffect } from "react"
import Aos from "aos"
import phone from "../../Images/phone.png"
import styles from "./Services.module.css"

const Services = () => {

    useEffect(() => Aos.init({ duration: 2000, delay: 0, offset: 400 }))

    return (
        <div id="services" className={styles.services}>
            <div className={styles.container}>
                <h1 className={styles.head}><span>My</span> Services</h1>
                <p className={styles.para}>I provide you with an excellent UI/UX along with functionality.</p>
                <div data-aos="zoom-out" className={styles.card_wrapper}>
                    <div className={styles.card}>
                        <img src={phone} alt="" />
                        <h2>Website Design</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga, corporis animi minima?</p>
                    </div>
                    <div className={styles.card}>
                        <img src={phone} alt="" />
                        <h2>Web Development</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga, corporis animi minima?</p>
                    </div>
                    <div className={`${styles.card} ${styles.card_3}`}>
                        <img src={phone} alt="" />
                        <h2>Graphic Design</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga, corporis animi minima?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
