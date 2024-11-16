import "./Earnings.scss";
import Img from "../../assets/earnings.png";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Earnings = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    return (
        <section className="earnings">
            <div className="earnings__container wrapper">
                <div className="earnings__left" data-aos="fade-right">
                    <img src={Img} alt="earnings" />
                </div>

                <div className="earnings__right" data-aos="zoom-in-up">
                    <h2>Track your trading annd transactions made easy</h2>
                    <p>BKR Pro commissions range from USD 0.0005 to USD 0.0035 per share
                        on stocks and include the IB SmartRoutingSM system.
                        IB SmartRoutingSM helps support best execution.
                    </p>
                    <a href="#" className="btn">
                        GET STARTED
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Earnings;