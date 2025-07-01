import profile from '../assets/profile.jpg'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <div className="heading-container">
        <img className="profile-image" src={profile} alt="Profile" />
        <div className="quote-box">
          <AnimatedText text="AI solves problems; I want to understand why a problem is even worth solving." />
        </div>
      </div>

      <div className="text-section">
        <h1>Hi, I'm Jerome</h1>
        <p>
          I'm a rising sophomore at Cornell University, majoring in Computer Science and Mathematics, intending a minor in Biomedical Engineering.
        </p>
        <p>
          I love questing after underlying truths that transcend disciplinary boundaries — using systems thinking as the compass.
          AI solves problems; I want to understand why a problem is even worth solving.
        </p>
        <p>
          The foundation of my work is building complex and scalable software systems — especially in machine learning orchestration,
          information retrieval, and large language models. But systems thinking to me isn't just a tool — it's a process. Just like writing
          expresses the world in natural language, systems thinking expresses it through logical modules and abstractions.
        </p>
        <p>
          I hope to apply this process to areas that push the frontiers of human knowledge.
          That’s why I’m interested in AI-for-Science, and why I want to keep exploring biomedical engineering and systems biology in the long run.
        </p>
      </div>
    </div>
  )
}

function AnimatedText({ text }: { text: string }) {
    const words = text.split(' ')
  
    return (
      <p className="animated-text">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="animated-word">
            {word.split('').map((char, charIndex) => {
              const index = wordIndex * 10 + charIndex // adjust spacing
              return (
                <span key={charIndex} style={{ animationDelay: `${index * 30}ms` }}>
                  {char}
                </span>
              )
            })}
            <span>&nbsp;</span>
          </span>
        ))}
      </p>
    )
  }
  