import profile from '../assets/profile.jpg'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <div className="heading-container">
        <img className="profile-image" src={profile} alt="Profile" />
        <div className='heading-content'> 
            <div className="quote-box">
            <AnimatedText text="Engineering. Philosophy. Mathematics. Science. The Gospel. A life on mission." />
            </div>
            <div className="contact">
                <p>Email: jth264@cornell.edu</p>
            </div>
        </div>
      </div>

      <div className="text-section">
        <h1>Hi, I'm Jerome Hsu (許澤厚)</h1>
        <p>
        I'm a rising sophomore at Cornell University, majoring in Computer Science and Mathematics. I aspire to be a philosopher engineer that harnesses mathematics to understand science, uncovering beauty of God's creation and the surpassing awesomeness of His Love. 
        </p>
        <p>
        Rooted in deep philosophical inquiry into how things relate and interact, and powered by engineering precision, I design systems that drive progress in information retrieval, machine learning orchestration, and beyond. I'm currently doing ML research in <a href="https://youngxinyu1802.github.io/labweb/" target="_blank" rel="noopener noreferrer">Professor Jennifer Sun's lab</a>.
        Looking ahead, I plan to build systems that deeply understand the natural world, starting from the physical foundations: quantum chemistry and drug discovery, and eventually systems biology and neuroscience.
        </p>
        
        <p>
          I love digging deeper into truth and asking "why", because I love discovering unexpected but profound connections between seemingly unconnected areas.
          Using systems thinking as the compass, I look at computer science through the lens of philosophy, and understand biology through mathematical language and structure.
          AI solves problems; I want to understand why a problem is even worth solving.
        </p>
        <p>
          I like systems because of its incredible expressiveness and creative potential. Just like writing
          expresses the world in emotions and imagery, I see systems thinking as expressing the world through logical modules and abstractions. A combination can create something truly grounded and moving. 
        </p>

        <p> 
        I'm a part of <a href="https://cornelldata.science/" target="_blank" rel="noopener noreferrer">Cornell Data Science</a> team and <a href="https://www.crucornell.com/" target="_blank" rel="noopener noreferrer">CRU</a>. 
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
  