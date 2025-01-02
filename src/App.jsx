import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6">
        <Navbar />
        <Profile />
        <Projects />
        <Experience />
        <Footer />
      </div>
      
    </>
  )
}

export default App
