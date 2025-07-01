import './ArticleCard.css'

interface ArticleCardProps {
  image: string
  title: string
  hook: string
  link?: string
}

export default function ArticleCard({ image, title, hook, link }: ArticleCardProps) {
  return (
    <div className="article-card">
      <div className="image-container">
        <img className="article-image" src={image} alt={`${title} preview`} />
      </div>
      <div className="article-content">
        <div>
          <h3>{title}</h3>
          <p className="hook">{hook}</p>
        </div>
        {link ? (
          <a className="btn" href={link} target="_blank" rel="noopener noreferrer">
            Read
          </a>
        ) : (
          <span className="coming-soon">Coming soon</span>
        )}
      </div>
    </div>
  )
}
