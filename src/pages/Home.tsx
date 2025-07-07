import profile from '../assets/profile.jpg'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <div className="heading-container">
        <img className="profile-image" src={profile} alt="Profile" />
        <div className='heading-content'> 
            <div className="quote-box">
            <AnimatedText text="AI solves problems; I want to understand why a problem is even worth solving." />
            </div>
            <div className="contact">
                <p>Email: jth264@cornell.edu</p>
            </div>
        </div>
      </div>

      <div className="text-section">
        <h1>Hi, I'm Jerome Hsu (許澤厚)</h1>
        <p>
        I'm a rising sophomore at Cornell University, majoring in Computer Science and Mathematics, intending a minor in Biomedical Engineering.
        I'm currently doing ML research in <a href="https://youngxinyu1802.github.io/labweb/" target="_blank" rel="noopener noreferrer">Professor Jennifer Sun's lab</a>.
        Outside of academics, I'm involved in the <a href="https://cornelldata.science/" target="_blank" rel="noopener noreferrer">Cornell Data Science</a> team and <a href="https://www.crucornell.com/" target="_blank" rel="noopener noreferrer">CRU</a>.
        </p>

        <p>
          I love digging deeper into truth and asking "why", because I love discovering unexpected but profound connections between seemingly unconnected areas.
          Using systems thinking as the compass, I look at computer science through the lens of philosophy, and understand biology through mathematical language and structure.
          AI solves problems; I want to understand why a problem is even worth solving.
        </p>
        <p>
          The foundation of my systems thinking is through building complex and scalable software systems — especially in machine learning orchestration,
          information retrieval, and large language models. But systems thinking to me isn't just a tool — it's a process. Just like writing
          expresses the world in natural language, systems thinking expresses it through logical modules and abstractions.
        </p>
        <p>
          I hope to apply this process to areas that push the frontiers of human knowledge.
          That’s why I’m interested in AI-for-Science, and why I want to keep exploring biomedical engineering and systems biology in the long run.
        </p>

        <p> 
        Outside of work, I enjoy piano, soccer, table tennis, going on hikes, cooking, and hanging out.  
        I'm actively looking for passionate peers to collaborate on future projects. <em>Please don't hesitate to reach out if you share similar interests or have exciting ideas to discuss!</em>
        </p>
      </div>
    </div>
  )
}

function AnimatedText({ text }: { text: string }) {
    const words = text.split(' ');
  
    let globalCharIndex = 0; // incremented globally across words
  
    return (
      <p className="animated-text">
        {words.map((word, wordIndex) => {
          const chars = word.split('').map((char) => {
            const index = globalCharIndex++;
            return (
              <span key={index} style={{ animationDelay: `${index * 30}ms` }}>
                {char}
              </span>
            );
          });
  
          // Add space as its own span
          const space = (
            <span key={`space-${wordIndex}`} style={{ animationDelay: `${globalCharIndex * 30}ms` }}>
              &nbsp;
            </span>
          );
          globalCharIndex++; // count the space as a step
  
          return (
            <span key={wordIndex} className="animated-word">
              {chars}
              {space}
            </span>
          );
        })}
      </p>
    );
  }
  