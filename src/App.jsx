import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Profile />
        <Experience />
        <Projects />
        <About />
        <Footer />
      </div>
      
    </>
  )
}

export default App
