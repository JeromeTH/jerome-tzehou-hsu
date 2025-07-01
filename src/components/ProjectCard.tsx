import './ProjectCard.css'

interface ProjectCardProps {
  image: string
  title: string
  description: string
  progress: string
  githubLink?: string | null
  demoLink?: string | null
}

export default function ProjectCard({
  image,
  title,
  description,
  progress,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  const buttons = [
    githubLink && (
      <a key="github" className="btn" href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
    demoLink && (
      <a key="demo" className="btn" href={demoLink} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
    ),
  ].filter(Boolean)

  return (
    <div className="project-card">
      <img className="project-image" src={image} alt={`${title} banner`} />
      <div className="project-content">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="progress"><strong>Progress:</strong> {progress}</p>
        {buttons.length > 0 && <div className="button-row">{buttons}</div>}
      </div>
    </div>
  )
}
