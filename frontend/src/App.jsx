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
import { Dashboard } from './components/user/Dashboard'


const Home = () => (
  <>
    <Profile />
    <Projects />
    <Experience />
  </>
)

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen max-w-4xl mx-auto px-6">
        <Router>
          <Navbar />
          <div className='flex-grow'>
            <Routes>
              <Route path={`/`} element={<Home />} />
              <Route path={`/aboutme`} element={<About />} />
              <Route path={`/login`} element={<Login />} />
              <Route path={`/logout`} element={<Logout />} />
              <Route path={`/blogs`} element={<Blog />} />
              <Route path={`/blogposts`} element={<ProtectedRoute> <BlogPost /> </ProtectedRoute>} />
              <Route path={`/experienceposts`} element={<ProtectedRoute> <ExperiencePost /> </ProtectedRoute>} />
              <Route path={`/dashboard`} element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
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
