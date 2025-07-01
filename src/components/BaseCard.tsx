// BaseCard.tsx
import './BaseCard.css'
import type { ReactNode } from 'react'

interface BaseCardProps {
  image: string
  children: ReactNode
  buttons?: ReactNode
}

export default function BaseCard({ image, children, buttons }: BaseCardProps) {
  return (
    <div className="base-card">
      <img className="card-image" src={image} alt="Card visual" />
      <div className="card-content">
        {children}
        {buttons && <div className="button-row">{buttons}</div>}
      </div>
    </div>
  )
}
