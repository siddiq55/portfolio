import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import vshopimg from '../assets/Images/vshopimg.png'
import qrimg from '../assets/Images/qrimg.png'
import vchatimg from '../assets/Images/vchatimg.png'
import './Projects.css'

const projects = [
    {
        id: 'project-1',
        title: 'DevConnect',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
        tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'JWT'],
        github: 'https://github.com/yourusername/devconnect',
        live: 'https://devconnect.vercel.app',
    },
    {
        id: 'project-2',
        title: 'VShop E-Commerce Website',
        image: vshopimg,
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/siddiq55/vshop-frontend',
        live: 'https://vshop-frontend.vercel.app/',
    },
    {
        id: 'project-3',
        title: 'VChat Real-Time Chat App',
        image: vchatimg,
        tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Socket.io'],
        github: 'https://github.com/siddiq55/vchat',
        live: 'https://vchat-murex-nine.vercel.app/login',
    },
    {
        id: 'project-4',
        title: 'QR Code Generator',
        image: qrimg,
        tech: ['React'],
        github: 'https://github.com/siddiq55/qr-code-react-js',
        live: 'https://qr-code-react-js.vercel.app/',
    },
]

export default function Projects() {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <p className="section-label">What I've built</p>
                    <h2 className="section-title">Projects</h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.article
                            key={project.id}
                            id={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            viewport={{ once: true, margin: '-60px' }}
                            whileHover={{ y: -6 }}
                        >
                            {/* Project Image */}
                            <div className="project-img-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-img"
                                    loading="lazy"
                                />
                                <div className="project-img-overlay">
                                    <div className="project-overlay-links">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} GitHub`}
                                            className="overlay-btn"
                                        >
                                            <FiGithub size={18} /> Code
                                        </a>
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.title} live demo`}
                                                className="overlay-btn overlay-btn-primary"
                                            >
                                                <FiExternalLink size={18} /> Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="project-footer">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-links">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} GitHub`}
                                            className="project-icon-link"
                                        >
                                            <FiGithub size={16} />
                                        </a>
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.title} live`}
                                                className="project-icon-link"
                                            >
                                                <FiExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="project-tech">
                                    {project.tech.map(t => (
                                        <span key={t} className="tech-pill">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
