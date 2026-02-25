import './App.css'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer-container">
            <h3 className="footer-text">Haixin Zhou</h3>
            <h4 className="footer-text"> Software Developer</h4>
            <hr/>
            <nav className="footer-nav">
                <Link to="/" className="page-title">ABOUT</Link>

                <Link to="/all-works" className="page-title">ALL WORKS</Link>

                <Link to="/uiux" className="page-title">UI/UX</Link>

                <Link to="/architecture" className="page-title">ARCHITECTURE</Link>

                <Link to="/resume" className="page-title">RESUME</Link>

            </nav>
            <div className="contacts">
                    <i className="fa-brands fa-linkedin contact" ></i>
                    <i class="fa-solid fa-envelope contact"></i>
                </div>
        </div>
    )
}

export default Footer