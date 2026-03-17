import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleLink = (e, href) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="container nav-inner">
                <a href="#hero" className="nav-logo" onClick={e => handleLink(e, '#hero')}>
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-name">Siddiq</span>
                    <span className="logo-bracket">/&gt;</span>
                </a>

                <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="nav-link"
                            onClick={e => handleLink(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="mailto:msiddiq5565@gmail.com"
                        className="nav-cta"
                    >
                        Hire Me
                    </a>
                </nav>

                <button
                    className={`hamburger${menuOpen ? ' active' : ''}`}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                    id="hamburger-btn"
                >
                    <span /><span /><span />
                </button>
            </div>
        </header>
    )
}
