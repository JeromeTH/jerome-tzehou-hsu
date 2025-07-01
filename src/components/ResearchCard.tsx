import BaseCard from './BaseCard'
import './ResearchCard.css'

interface ResearchCardProps {
  image: string
  title: string
  venue: string
  authors: string
  paperLink?: string | null
  codeLink?: string | null
}

export default function ResearchCard({
  image,
  title,
  venue,
  authors,
  paperLink,
  codeLink,
}: ResearchCardProps) {
  const buttons = [
    paperLink && (
      <a key="paper" className="btn" href={paperLink} target="_blank" rel="noopener noreferrer">
        PAPER
      </a>
    ),
    codeLink && (
      <a key="code" className="btn" href={codeLink} target="_blank" rel="noopener noreferrer">
        CODE
      </a>
    ),
  ].filter(Boolean)

  return (
    <BaseCard image={image} buttons={buttons}>
      <h3>{title}</h3>
      <p className="venue">{venue}</p>
      <p className="authors">{authors}</p>
    </BaseCard>
  )
}
