import { NavLink } from 'react-router-dom'
import { Github, Linkedin } from 'lucide-react'
import './Sidebar.css'

interface SidebarProps {
  onNavigate?: () => void
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const handleClick = () => {
    if (onNavigate) onNavigate()
  }

  return (
    <aside className="sidebar">
      <h2>Jerome Hsu</h2>
      <nav className="nav">
        <NavLink to="/" onClick={handleClick}>Home</NavLink>
        <NavLink to="/research" onClick={handleClick}>Research</NavLink>
        <NavLink to="/projects" onClick={handleClick}>Projects</NavLink>
        <NavLink to="/writing" onClick={handleClick}>Writing</NavLink>
        <NavLink to="/cv" onClick={handleClick}>CV</NavLink>
        <a
        href="https://github.com/JeromeTH"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        >
        <Github size={32} />
        </a>
        <a
        href="https://www.linkedin.com/in/jerome-hsu-9b5198227/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        >
        <Linkedin size={32} />
        </a>
 
      </nav>
    </aside>
  )
}
