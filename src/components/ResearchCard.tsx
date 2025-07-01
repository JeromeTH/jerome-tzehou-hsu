import './ResearchCard.css'

interface ResearchCardProps {
  image: string
  title: string
  venue: string
  authors: string
  paperLink: string
  codeLink: string
}

export default function ResearchCard({
  image,
  title,
  venue,
  authors,
  paperLink,
  codeLink,
}: ResearchCardProps) {
  return (
    <div className="research-card">
      <img className="research-image" src={image} alt="paper graphic" />
      <div className="research-content">
        <h3>{title}</h3>
        <p className="venue">{venue}</p>
        <p className="authors">{authors}</p>
        <div className="button-row">
          <a href={paperLink} className="btn" target="_blank" rel="noopener noreferrer">PAPER</a>
          <a href={codeLink} className="btn" target="_blank" rel="noopener noreferrer">CODE</a>
        </div>
      </div>
    </div>
  )
}
