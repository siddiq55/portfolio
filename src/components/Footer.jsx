import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <p className="footer-name">Muhammad Siddique</p>
                <p className="footer-sub">MERN Stack Developer</p>
                <div className="footer-socials">
                    <a href="https://github.com/siddiq55" target="_blank" rel="noopener noreferrer" aria-label="GitHub" id="footer-github">
                        <FiGithub size={18} />
                    </a>
                    <a href="https://linkedin.com/in/siddiq01" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" id="footer-linkedin">
                        <FiLinkedin size={18} />
                    </a>
                    <a href="mailto:msiddiq5565@gmail.com" aria-label="Email" id="footer-email">
                        <FiMail size={18} />
                    </a>
                </div>
                <p className="footer-copy">
                    &copy; {year} · Designed & built by <span>Muhammad Siddique</span>
                </p>
            </div>
        </footer>
    )
}
