import './App.css'
import './footer.css'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer-container">
            <h3 className="footer-text">Haixin Zhou</h3>
            <h4 className="footer-text"> Frontend Engineer</h4>
            <nav className="footer-nav">
                <Link to="/" className="page-title">ABOUT</Link>

                <Link to="/all-works" className="page-title">ALL WORKS</Link>

                <Link to="/uiux" className="page-title">UI/UX</Link>

                <Link to="/architecture" className="page-title">ARCHITECTURE</Link>

                <Link to="/resume" className="page-title">RESUME</Link>

            </nav>
            <div className="contacts">
                <a href="https://www.linkedin.com/in/haixin-zhou-643349177/">
                    <i className="fa-brands fa-linkedin contact" ></i>
                </a>
                <a href="mailto:haixin.zhou2001@gmail.com">
                    <i className="fa-solid fa-envelope contact"></i>
                </a>
            </div>
            <hr />
            <p className='copyright'>2026 - Haixin Zhou | Designed and programmed by Haixin</p>
        </div>
    )
}

export default Footer