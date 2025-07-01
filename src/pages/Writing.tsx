import ArticleCard from '../components/ArticleCard'
import cave from '../assets/cave.png'
import star from '../assets/star.png'
import bible from '../assets/bible.jpg'

export default function Writing() {
  return (
    <div>
      <h2>Writing</h2>
      <p style={{ maxWidth: '750px', marginBottom: '2rem' }}>
        Out side of computer science research, I also write in philosophy, theology, and music. 
        I've experienced that digging deeper into truth often leads to unexpected connections across disciplines, and 
        found that God's love often shines through the critical hinges where human knowledge can't explain.
      </p>

      <ArticleCard
        image={bible}
        title="Plato and Bible, Happiness and Beyond"
        hook="Does justice bring happiness? Does knowledge bring justice?"
        link="https://medium.com/@jthsu20/plato-and-bible-happiness-and-beyond-1973eb594982"
      />

      <ArticleCard
        image={cave}
        title="Plato’s Allegory of the Cave and the Conformist"
        hook="When does a person with knowledge become evil?"
        link="https://medium.com/@jthsu20/platos-allegory-of-the-cave-and-the-conformist-5cab43e4e832"
      />

        <ArticleCard
        image={star}
        title="Perfectly Imperfect. What playing Bach taught me"
        hook="For a frustrated soul that questions whether efforts are even worth it."
        link="https://medium.com/@jthsu20/perfectly-imperfect-what-playing-bach-taught-me-4480cb9eb250"
      />
    </div>
  )
}
