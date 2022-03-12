import Slider from "react-slick";
import lady from "../../Images/lady.png"
import client1 from "../../Images/client1.jpeg"
import styles from "./Testimonials.module.css"

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div id="testimonials" className={styles.testimonials}>
            <div className={styles.container}>
                <h1 className={styles.head}><span>My</span> Testimonials</h1>
                <p className={styles.para}>What my clients say about me.</p>
                <Slider {...settings} className={styles.slider}>
                    <div className={styles.slide}>
                        <img src={client1} alt="" />
                        <p>A++ Person.. very knowledgeable. Trained me how to use.. very comfortable to work with.. pleased to work with him..</p>
                        <p>Sathvik - <span>India</span></p>
                    </div>
                    <div className={styles.slide}>
                        <img src={lady} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorum omnis vel, explicabo ab possimus similique consectetur tempora at voluptas.</p>
                        <span>- Jhon Doel, ABC Company</span>
                    </div>
                    <div className={styles.slide}>
                        <img src={lady} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorum omnis vel, explicabo ab possimus similique consectetur tempora at voluptas.</p>
                        <span>- Jhon Doel, ABC Company</span>
                    </div>
                    <div className={styles.slide}>
                        <img src={lady} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorum omnis vel, explicabo ab possimus similique consectetur tempora at voluptas.</p>
                        <span>- Jhon Doel, ABC Company</span>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Testimonial
