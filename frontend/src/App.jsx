import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'

const Home = () => (
  <>
    <Profile />
    <Projects />
    <Experience />
    <Footer />
  </>
)

const App = () => {
  const home = "foluwaderibigbe"
  return (
    <>
      <div className="max-w-4xl mx-auto px-6">
        <Router>
          <Navbar />
          <div className=''>
            <Routes>
              <Route path={`/${home}`} element={<Home />} />
              <Route path={`/${home}/aboutme`} element={<About />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
