import { NavLink } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Jerome Hsu</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/writing">Writing</NavLink>
        <NavLink to="/cv">CV</NavLink>
      </nav>
    </aside>
  )
}
