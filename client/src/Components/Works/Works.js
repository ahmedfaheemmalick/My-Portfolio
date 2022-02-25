import { useEffect } from "react"
import Aos from "aos"
import { ReactComponent as Link } from "../../Images/link.svg"
import { ReactComponent as Github } from "../../Images/github.svg"
import covid_19 from "../../Images/covid-19.png"
import shoe_store from "../../Images/shoe-store.png"
import phone_1 from "../../Images/ph-1.png"
import styles from "./Works.module.css"

const Works = () => {

    useEffect(() => Aos.init({ duration: 2000, delay: 0, offset: 400 }))

    return (
        <div id="works" className={styles.work}>
            <div className={styles.container}>
                <h1 className={styles.head}><span>My</span> Works</h1>
                <p className={styles.para}>What I have done through this career</p>
                <div className={styles.card_wrapper}>
                    <div className={styles.card}>
                        <div className={styles.overlay}>
                            <h1>Covid-19 App</h1>
                            <div className={styles.icons}>
                                <a href="http://a-covid-19-tracker-app.surge.sh" target="_blank" rel="noreferrer">
                                    <Link className={styles.icon} />
                                </a>
                                <a href="https://github.com/ahmedfaheemmalick/a-covid-19-tracker-app" target="_blank" rel="noreferrer">
                                    <Github className={styles.icon} />
                                </a>
                            </div>
                        </div>
                        <img src={covid_19} alt="" />
                    </div>
                    <div className={styles.card}>
                        <div className={styles.overlay}>
                            <h1>Shoe Store App</h1>
                            <div className={styles.icons}>
                                <a href="http://a-shoe-store-app.surge.sh" target="_blank" rel="noreferrer">
                                    <Link className={styles.icon} />
                                </a>
                                <a href="https://github.com/ahmedfaheemmalick/a-shoe-store-app" target="_blank" rel="noreferrer">
                                    <Github className={styles.icon} />
                                </a>
                            </div>
                        </div>
                        <img src={shoe_store} alt="" />
                    </div>
                    <div className={styles.card}>
                        <div className={styles.overlay}>
                            <h1>Hello there</h1>
                            <div className={styles.icons}>
                                <a href="http://a-shoe-store-app.surge.sh" target="_blank" rel="noreferrer">
                                    <Link className={styles.icon} />
                                </a>
                                <a href="https://github.com/ahmedfaheemmalick/a-shoe-store-app" target="_blank" rel="noreferrer">
                                    <Github className={styles.icon} />
                                </a>
                            </div>
                        </div>
                        <img src={phone_1} alt="" />
                    </div>
                    <div className={styles.card}>
                        <div className={styles.overlay}>
                            <h1>Hello there</h1>
                            <div className={styles.icons}>
                                <a href="http://a-shoe-store-app.surge.sh" target="_blank" rel="noreferrer">
                                    <Link className={styles.icon} />
                                </a>
                                <a href="https://github.com/ahmedfaheemmalick/a-shoe-store-app" target="_blank" rel="noreferrer">
                                    <Github className={styles.icon} />
                                </a>
                            </div>
                        </div>
                        <img src={phone_1} alt="" />
                    </div>
                    <div className={styles.card}>
                        <div className={styles.overlay}>
                            <h1>Hello there</h1>
                            <div className={styles.icons}>
                                <a href="http://a-shoe-store-app.surge.sh" target="_blank" rel="noreferrer">
                                    <Link className={styles.icon} />
                                </a>
                                <a href="https://github.com/ahmedfaheemmalick/a-shoe-store-app" target="_blank" rel="noreferrer">
                                    <Github className={styles.icon} />
                                </a>
                            </div>
                        </div>
                        <img src={phone_1} alt="" />
                    </div>
                    <div className={styles.card}>
                        <div className={styles.overlay}>
                            <h1>Hello there</h1>
                            <div className={styles.icons}>
                                <a href="http://a-shoe-store-app.surge.sh" target="_blank" rel="noreferrer">
                                    <Link className={styles.icon} />
                                </a>
                                <a href="https://github.com/ahmedfaheemmalick/a-shoe-store-app" target="_blank" rel="noreferrer">
                                    <Github className={styles.icon} />
                                </a>
                            </div>
                        </div>
                        <img src={phone_1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
