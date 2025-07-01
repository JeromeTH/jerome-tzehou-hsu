export default function Resume() {
    return (
      <div>
        <h2>My Resume</h2>
  
        {/* Inline PDF viewer */}
        <iframe
          src="/jerome-tzehou-hsu/resume.pdf"
          width="100%"
          height="800px"
          style={{ border: '1px solid #ccc', marginTop: '1rem' }}
          title="Resume PDF"
        />
  
      </div>
    )
  }
  