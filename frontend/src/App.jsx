import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Login from './components/user/Login'
import Logout from './components/user/Logout'
import BlogPost from './components/user/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'


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
              <Route path={`/${home}/login`} element={<Login />} />
              <Route path={`/${home}/logout`} element={<Logout />} />
              <Route path={`/${home}/posts`} element={<ProtectedRoute> <BlogPost /> </ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
