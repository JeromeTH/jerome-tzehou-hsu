import profile from '../assets/profile.jpg'

export default function Home() {
  return (
    <div>
      <img src={profile} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
      <h1>Hi, I'm Jerome</h1>
      <p>
        I'm interested in intelligent systems, biological modeling, and scalable ML infra. This
        website collects my work and thoughts.
      </p>
    </div>
  )
}
