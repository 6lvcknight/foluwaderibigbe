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
import { ExperiencePost } from './components/user/ExperiencePost'
import { Blog } from './components/Blog'


const Home = () => (
  <>
    <Profile />
    <Projects />
    <Experience />
  </>
)

const App = () => {
  const home = "foluwaderibigbe"
  return (
    <>
      <div className="flex flex-col min-h-screen max-w-4xl mx-auto px-6">
        <Router>
          <Navbar />
          <div className='flex-grow'>
            <Routes>
              <Route path={`/${home}`} element={<Home />} />
              <Route path={`/${home}/aboutme`} element={<About />} />
              <Route path={`/${home}/login`} element={<Login />} />
              <Route path={`/${home}/logout`} element={<Logout />} />
              <Route path={`/${home}/blogs`} element={<Blog />} />
              <Route path={`/${home}/blogposts`} element={<ProtectedRoute> <BlogPost /> </ProtectedRoute>} />
              <Route path={`/${home}/experienceposts`} element={<ProtectedRoute> <ExperiencePost /> </ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
