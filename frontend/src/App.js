
import React, {  Suspense, useState } from 'react';
import './App.css';
import { BrowserRouter  , Routes , Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { FaFacebook  , FaInstagram , FaLinkedin, FaGithub, FaTimes, FaBars  } from 'react-icons/fa';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

//Lazy loading

const AmazonScreen = lazy(() => import('./screens/AmazonScreen'));
const YelpCampScreen = lazy(() => import('./screens/YelpCampScreen'));
const UniversityScreen = lazy(() => import('./screens/UniversityScreen'));
const SignScreen = lazy(() => import('./screens/SignScreen'));
const FrontWebsiteScreen = lazy(() => import('./screens/FrontWebsiteScreen'));
const ProjectJavascriptScreen = lazy(() => import('./screens/ProjectJavascriptScreen'));


function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


const location = useLocation();
const navigate = useNavigate();

// Check if not on HomeScreen
const isNotHome = location.pathname !== '/';








  return (

  <div>
    <ToastContainer />
    
    <header className="flex flex-col items-center w-full pt-4 md:pt-0">
      <div className="flex flex-row items-center justify-between w-full px-6 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
  {isNotHome && (
    <button onClick={() => navigate('/')} className="text-white hover:text-gray-300 mt-1">
      <FaArrowLeft size={20} />
    </button>
  )}
  <b className="text-xl md:text-4xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
    Portfolio
  </b>
</div>


    {/* Hamburger/Close Icon - Fixed position when menu is open */}
    <div className="md:hidden z-50">
      <button onClick={toggleMenu} className="focus:outline-none">
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>

        {/* Navigation Links */}
{/* Fullscreen Overlay Menu for Mobile */}
<nav
  className={`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-40 transition-transform duration-300 ${
    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
  } md:relative md:flex md:flex-row md:items-center md:justify-end md:translate-x-0 md:bg-transparent md:h-auto md:static`}
>
  <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 text-lg">
    <li>
      <Link to={'/'} onClick={() => setIsMenuOpen(false)}>
        Home
      </Link>
    </li>
    <li>
      <Link to={'/#about'} onClick={() => setIsMenuOpen(false)}>
        About
      </Link>
    </li>
    <li>
      <Link to={'/#skills'} onClick={() => setIsMenuOpen(false)}>
        Skills
      </Link>
    </li>
    <li>
      <Link to={'/#projects'} onClick={() => setIsMenuOpen(false)}>
        Projects
      </Link>
    </li>
    <li>
      <Link to={'/#experience'} onClick={() => setIsMenuOpen(false)}>
        Experience
      </Link>
    </li>
    {/* <li>
      <a href="#footer" onClick={() => setIsMenuOpen(false)} className="border-2 px-4 py-2 rounded-md">
        Contact Me
      </a>
    </li> */}
  </ul>
</nav>

      </div>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='/projects/amazon' element={<Suspense fallback={<div><h1>Loading...</h1></div>}><AmazonScreen /></Suspense>} />
        <Route path='projects/yelpcamp' element={<Suspense fallback={<div><h1>Loading...</h1></div>}><YelpCampScreen /></Suspense>} />
        <Route path='/projects/university' element={<Suspense fallback={<div><h1>Loading...</h1></div>}><UniversityScreen /></Suspense>} />
        <Route path='/projects/signfrom' element={<Suspense fallback={<div><h1>Loading...</h1></div>}><SignScreen /></Suspense>} />
        <Route path='/projects/frontwebsite' element={<Suspense fallback={<div><h1>Loading...</h1></div>}><FrontWebsiteScreen /></Suspense>} />
        <Route path='/projects/projectjavascript' element={<Suspense fallback={<div><h1>Loading...</h1></div>}><ProjectJavascriptScreen /></Suspense>} /> 
      </Routes>
    </main>

    <footer id="footer" className="bg-gray-800 text-gray-300 py-10">
  <div className="container mx-auto text-center space-y-8">
    {/* About Section */}
    <div className="about-section space-y-4">
      <h2 className="text-2xl font-bold">About Us</h2>
      <p>
        Mohamad Jomaa,a skilled MERN stack developer with hands-on experience.
      </p>
      <div className="contact">
        <p>mhamad_jomaa@outlook.com</p>
      </div>
    </div>

    {/* Social Links */}
    <div className="socials flex justify-center space-x-6">
      <a href="https://www.facebook.com/mhamad.jomaa" className="text-gray-300 hover:text-gray-400">
        <FaFacebook className="text-2xl" />
      </a>
      <a href="https://github.com/joumaamhamad" className="text-gray-300 hover:text-gray-400">
        <FaGithub className="text-2xl" />
      </a>
      <a href="https://www.instagram.com/mhamadjomaa8/" className="text-gray-300 hover:text-gray-400">
        <FaInstagram className="text-2xl" />
      </a>
      <a href="https://www.linkedin.com/in/mhamad-jomaa-76409a230/" className="text-gray-300 hover:text-gray-400">
        <FaLinkedin className="text-2xl" />
      </a>
    </div>

    {/* Quick Links */}
    <div className="quick-links">
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
      <ul className="flex justify-center space-x-6">
        <li><a href="/" className="hover:text-gray-400">Home</a></li>
        <li><a href="/?#about" className="hover:text-gray-400">About</a></li>
        <li><a href="/?#skills" className="hover:text-gray-400">Skills</a></li>
        <li><a href="/" className="hover:text-gray-400">Portfolio</a></li>
      </ul>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-gray-700 pt-4">
      <p>&copy; Portfolio 2025 | Mohamad Jomaa</p>
    </div>
  </div>
</footer>


    
  </div>

);
}

export default App;
