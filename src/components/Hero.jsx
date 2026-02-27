import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import './Hero.css'

const socialLinks = [
    {
        id: 'github-link',
        icon: <FiGithub size={20} />,
        label: 'GitHub',
        href: 'https://github.com/siddiq55',
    },
    {
        id: 'linkedin-link',
        icon: <FiLinkedin size={20} />,
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/muhammad-siddique-70074b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
        id: 'email-link',
        icon: <FiMail size={20} />,
        label: 'Email',
        href: 'mailto:msiddiq5565@email.com',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    }),
}

export default function Hero() {
    const scrollToAbout = () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" className="hero section">
            {/* Background gradient orbs */}
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />

            <div className="container hero-content">
                <motion.p
                    className="hero-greeting"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                >
                    Hello, I'm
                </motion.p>

                <motion.h1
                    className="hero-name"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                >
                    Muhammad Siddique
                </motion.h1>

                <motion.div
                    className="hero-title-wrapper"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                >
                    <span className="hero-title">MERN Stack Developer</span>
                </motion.div>

                <motion.p
                    className="hero-bio"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={3}
                >
                    I build fast, scalable full-stack web applications using{' '}
                    <span className="highlight">MongoDB</span>,{' '}
                    <span className="highlight">Express</span>,{' '}
                    <span className="highlight">React</span>, and{' '}
                    <span className="highlight">Node.js</span>.
                    Clean code, thoughtful architecture, seamless user experience.
                </motion.p>

                <motion.div
                    className="hero-socials"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={4}
                >
                    {socialLinks.map(link => (
                        <a
                            key={link.id}
                            id={link.id}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn"
                            aria-label={link.label}
                        >
                            {link.icon}
                            <span>{link.label}</span>
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    className="hero-actions"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={5}
                >
                    <a href="#projects" className="btn-primary" id="view-projects-btn"
                        onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                        View Projects
                    </a>
                    <a href="#about" className="btn-ghost" id="about-me-btn"
                        onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}>
                        About Me
                    </a>
                </motion.div>

                <motion.button
                    className="scroll-hint"
                    onClick={scrollToAbout}
                    id="scroll-hint-btn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    aria-label="Scroll down"
                >
                    <FiArrowDown size={18} />
                </motion.button>
            </div>
        </section>
    )
}
