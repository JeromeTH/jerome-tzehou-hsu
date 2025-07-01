import BaseCard from './BaseCard'
import './ArticleCard.css'

interface ArticleCardProps {
  image: string
  title: string
  hook: string
  link?: string | null
}

export default function ArticleCard({ image, title, hook, link }: ArticleCardProps) {
  const buttons = [
    link ? (
      <a key="read" className="btn" href={link} target="_blank" rel="noopener noreferrer">
        Read
      </a>
    ) : (
      <span key="coming" className="btn disabled">Coming Soon</span>
    ),
  ]

  return (
    <BaseCard image={image} buttons={buttons}>
      <h3>{title}</h3>
      <p className="hook">{hook}</p>
    </BaseCard>
  )
}
