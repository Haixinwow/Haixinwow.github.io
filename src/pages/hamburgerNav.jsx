import { Link, useLocation } from "react-router-dom"
import './hamburgerNav.css'

const HamburgerNav = ({ closeMenu }) => {
    const location = useLocation();

    return (
        <div className="responsive-nav">

            <div className="close-responsive-click-area" onClick={closeMenu}>
                <div className="close-responsive-button"><i class="fa-solid fa-x"></i></div>
            </div>

            <nav className="ham-nav">

                <Link to="/" onClick={closeMenu} className={`page-title ${location.pathname === "/" ? "currently-on" : ""}`}>ABOUT</Link>

                <Link to="/all-works" onClick={closeMenu} className={`page-title ${location.pathname === "/all-works" ? "currently-on" : ""}`}>ALL WORKS</Link>

                <Link to="/uiux" onClick={closeMenu} className={`page-title ${location.pathname === "/uiux" ? "currently-on" : ""}`}>UI/UX</Link>

                <Link to="/architecture" onClick={closeMenu} className={`page-title ${location.pathname === "/architecture" ? "currently-on" : ""}`}>ARCHITECTURE</Link>

                <Link to="/resume" onClick={closeMenu} className={`page-title ${location.pathname === "/resume" ? "currently-on" : ""}`}>RESUME</Link>

                <div className="contacts">
                    <a href="https://www.linkedin.com/in/haixin-zhou-643349177/">
                        <i className="fa-brands fa-linkedin contact" ></i>
                    </a>
                    <a href="mailto:haixin.zhou2001@gmail.com">
                        <i className="fa-solid fa-envelope contact"></i>
                    </a>

                </div>

            </nav>
        </div>
    )
}

export default HamburgerNav