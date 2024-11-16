import "./Navbar.scss";
import Logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


const Navbar = () => {
    const [showNav, setshowNav] = useState(false);
    return (
        <header className="navbar">
            <nav className="navbar__container wrapper">
                <a href="#" className="navbar__logo" onClick={() => setshowNav(false)}>
                    <img src={Logo} alt="logo" />
                </a>

                <ul className={'${showNav ? "show" : ""}'}>
                    <li onClick={() => setshowNav(false)}>
                        <a href="#">product</a>
                    </li>
                    <li onClick={() => setshowNav(false)}>
                        <a href="#">company</a>
                    </li>
                    <li onClick={() => setshowNav(false)}>
                        <a href="#">pricing</a>
                    </li>
                    <li onClick={() => setshowNav(false)}>
                        <a href="#">blog</a>
                    </li>
                </ul>

                <div className="navbar__btns">
                    <a href="#">Login</a>
                    <a href="#" className="btn">Sign up</a>
                </div>

                <div className="navbar__menu" onClick={() => setshowNav(!showNav)}>
                    {showNav ? <IoMdClose /> : <IoMenu />}
                </div>
            </nav>
        </header>
    );
};

export default Navbar