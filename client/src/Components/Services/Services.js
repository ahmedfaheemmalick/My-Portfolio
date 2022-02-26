import { useEffect } from "react"
import Aos from "aos"
import styles from "./Services.module.css"

const Services = () => {

    useEffect(() => Aos.init({ duration: 2000, delay: 0, offset: 400 }))

    return (
        <div id="services" className={styles.services}>
            <div className={styles.container}>
                <h1 className={styles.head}><span>My</span> Services</h1>
                <p className={styles.para}>I provide you with an excellent UI/UX along with functionalities.</p>
                <div data-aos="zoom-out" className={styles.card_wrapper}>
                    <div className={styles.card}>
                        <h2>Frontend Development</h2>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                        <span>React Js</span>
                        <span>Redux Js</span>
                        <span>Tailwind Css</span>
                        <span>Material UI</span>
                        <span>Bootstrap</span>
                    </div>
                    <div className={styles.card}>
                        <h2>MERN Stack Development</h2>
                        <span>MongoBD</span>
                        <span>Express Js</span>
                        <span>React Js</span>
                        <span>Node Js</span>
                        <span>Rest API</span>
                        <span>Graphql API</span>
                        <span>Typescript</span>
                    </div>
                    <div className={`${styles.card} ${styles.card_3}`}>
                        <h2>JAM Stack Development</h2>
                        <span>Gatsby</span>
                        <span>Graphql</span>
                        <span>FaunaDB</span>
                        <span>Contentful</span>
                        <span>TypeScript</span>
                        <span>Serverless Function</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
