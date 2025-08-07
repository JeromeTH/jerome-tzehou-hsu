// ProjectCard.tsx
import BaseCard from './BaseCard'
import type { ReactNode } from 'react';

interface ProjectCardProps {
  image: string
  title: string
  description: ReactNode
  state: string
  githubLink?: string | null
  demoLink?: string | null
}

export default function ProjectCard({
  image,
  title,
  description,
  state,
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
    <BaseCard image={image} buttons={buttons}>
      <h3>{title}</h3>
      <p className="description">{description}</p> 
      <p className="state"><strong>State:</strong> {state}</p>
    </BaseCard>
  )
}
