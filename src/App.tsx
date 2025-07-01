import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Research from './pages/Research'
import Projects from './pages/Projects'
import Writing from './pages/Writing'
import Resume from './pages/Resume'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/cv" element={<Resume />} />
      </Routes>
    </Layout>
  )
}

export default App
