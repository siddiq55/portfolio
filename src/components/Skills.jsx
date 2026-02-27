import { motion } from 'framer-motion'
import {
    SiMongodb, SiExpress, SiReact, SiNodedotjs,
    SiJavascript, SiTypescript, SiTailwindcss,
    SiGit, SiDocker, SiPostman, SiRedux, SiNextdotjs,
    SiHtml5, SiCss3
} from 'react-icons/si'
import './Skills.css'

const skillGroups = [
    {
        group: 'MERN Stack',
        items: [
            { name: 'MongoDB', icon: <SiMongodb />, color: '#3ecf8e' },
            { name: 'Express', icon: <SiExpress />, color: '#9898b8' },
            { name: 'React', icon: <SiReact />, color: '#4f9cf9' },
            { name: 'Node.js', icon: <SiNodedotjs />, color: '#68a063' },
        ],
    },
    {
        group: 'Languages & Frameworks',
        items: [
            { name: 'JavaScript', icon: <SiJavascript />, color: '#f0db4f' },
            { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
            { name: 'Next.js', icon: <SiNextdotjs />, color: '#f0f0f8' },
            { name: 'Redux', icon: <SiRedux />, color: '#764abc' },
            { name: 'HTML5', icon: <SiHtml5 />, color: '#e34f26' },
            { name: 'CSS3', icon: <SiCss3 />, color: '#264de4' },
            { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38bdf8' },
        ],
    },
    {
        group: 'Tools & DevOps',
        items: [
            { name: 'Git', icon: <SiGit />, color: '#f05032' },
            { name: 'Docker', icon: <SiDocker />, color: '#2496ed' },
            { name: 'Postman', icon: <SiPostman />, color: '#ff6c37' },
        ],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <p className="section-label">What I work with</p>
                    <h2 className="section-title">Skills</h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="skill-groups">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={group.group}
                            className="skill-group"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: gi * 0.12 }}
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            <h3 className="skill-group-label">{group.group}</h3>
                            <div className="skill-grid">
                                {group.items.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-card"
                                        whileHover={{ y: -4, scale: 1.03 }}
                                        transition={{ duration: 0.18 }}
                                        style={{ '--skill-color': skill.color }}
                                    >
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
