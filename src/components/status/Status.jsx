import "./Status.scss";
import StatusImg from "../../assets/status.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Status = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    return(
         <section className="status">
        <div className="status__container wrapper" >
            <div className="status__left" data-aos= "zoom-in-up">
                <h2>Trust us due to our safe and convenient trade log.</h2>
            <p>
                whether you're a seasoned trader or just starting out.
                With real-time market data, intuitive interface, and advanced charting tools,
                Sharelog empowers you to trade stocks, forex, cryptocurrencies, and more—all in one place.
            </p>
            <a href="#" className="btn">
                KNOW MORE
            </a>
            </div>
            <div className="status__right" data-aos= "fade-left">
                <img src={StatusImg} alt="status" />
            </div>
          
        </div>

    </section>
    );
};

export default Status;