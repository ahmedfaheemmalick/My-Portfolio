import styles from "./Freelancing.module.css"

const Freelancing = () => {
    return (
        <div className={styles.freelancing}>
            <div className={styles.container}>
                <h1>I"m available for Business.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, ipsam.</p>
                <a className={styles.btn} href="/contact">
                    Contact Me
                </a>
            </div>
        </div>
    )
}

export default Freelancing
