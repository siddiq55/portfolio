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
                    <a href="https://linkedin.com/in/muhammad-siddique-70074b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" id="footer-linkedin">
                        <FiLinkedin size={18} />
                    </a>
                    <a href="mailto:msiddiq5565@email.com" aria-label="Email" id="footer-email">
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
