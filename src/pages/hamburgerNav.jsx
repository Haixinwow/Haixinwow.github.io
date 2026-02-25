import { Link } from "react-router-dom"
import './hamburgerNav.css'

const HamburgerNav = ({ closeMenu }) => {
    return (
        <div className="responsive-nav">

            <div className="close-responsive-click-area" onClick={closeMenu}>
                <div className="close-responsive-button">x</div>
            </div>

            <nav className="ham-nav">

                <Link to="/" onClick={closeMenu} className="page-title">ABOUT</Link>

                <Link to="/all-works" onClick={closeMenu} className="page-title">ALL WORKS</Link>

                <Link to="/uiux" onClick={closeMenu} className="page-title">UI/UX</Link>

                <Link to="/architecture" onClick={closeMenu} className="page-title">ARCHITECTURE</Link>

                <Link to="/resume" onClick={closeMenu} className="page-title">RESUME</Link>

            </nav>
        </div>
    )
}

export default HamburgerNav