import "./Subscribe.scss";
import Aos from "aos";
import"aos/dist/aos.css";
import { useEffect } from "react";

const Subscribe = () => {
    useEffect(() => {
        Aos.init({ duration:1000});
    });
  return(
    <section className="subscribe">
        <div className="subscribe__container wrapper">
            <h2 data-aos="fade-up">Subscribe to get updates.</h2>
            <p>
            Gain access to real-time market data, in-depth analytics, personalized alerts, and
             expert trading strategies tailored to help you stay ahead. Subscribe now to elevate
              your trading experience and make smarter, faster, and more informed decisions. 
              Don’t miss out—join our premium community and take control of your financial future!"
            </p>
            <form action="#" data-aos="fade-up">
                <input type="email" placeholder="Write your email here"/>
                <a href="#" className="btn">
                    SUBSCRIBE 
                    </a>    
            </form>
        </div>
    </section>
  );
};
 

export default Subscribe;