import { NavLink } from 'react-router-dom'
import { Github, Linkedin } from 'lucide-react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Jerome Hsu</h2>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/writing">Writing</NavLink>
        <NavLink to="/cv">CV</NavLink>
        <a href="https://github.com/JeromeTH" target="_blank" rel="noopener noreferrer">
          <Github size={40} />
        </a>
        <a href="https://www.linkedin.com/in/jerome-hsu-9b5198227/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={40} />
        </a>
      </nav>
    </aside>
  )
}
