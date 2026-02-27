import { motion } from 'framer-motion'
import './About.css'

const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: '100%', label: 'Passion' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.55 },
    }),
}

export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <motion.p className="section-label" variants={fadeUp} custom={0}>Who I am</motion.p>
                    <motion.h2 className="section-title" variants={fadeUp} custom={1}>About Me</motion.h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        <p>
                            I'm a passionate <strong>MERN Stack Developer</strong> who loves turning ideas
                            into production-ready web applications. I focus on writing clean, maintainable
                            code and building seamless user experiences from the database layer all the way
                            to the UI.
                        </p>
                        <p>
                            When I'm not coding, I'm exploring new technologies, contributing to open source,
                            or learning about system architecture and scalability patterns.
                        </p>
                        <p>
                            I believe great software is built at the intersection of solid engineering
                            and thoughtful design — and I strive for both in every project I take on.
                        </p>
                        <div className="about-tags">
                            {['Full Stack', 'REST APIs', 'MongoDB', 'Express', 'React', 'Node.js', 'Git'].map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-stats"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        {stats.map(stat => (
                            <div key={stat.label} className="stat-card">
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
