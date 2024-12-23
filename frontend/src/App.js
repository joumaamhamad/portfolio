
import React, {  Suspense, useState } from 'react';
import './App.css';
import { BrowserRouter  , Routes , Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { FaFacebook  , FaInstagram , FaLinkedin, FaGithub, FaTimes, FaBars  } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';

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



  const [email , setEmail ] = useState('');
  const [message , setMessage ] = useState('');
  const [ isSending , setIsSending ] = useState(false);


  const sendEmail = async (e) => {

    e.preventDefault();
    setEmail('');
    setMessage('');
    setIsSending(true);

    try {
      const response = await axios.post('/send-email', {
        email: email,
        message: message,
      });

      toast.success("Email sent!Thank you!!");
      console.log('Email sent:', response.data);
      setIsSending(false);

    } catch (error) {

      toast.error("Error sending email!!");
      console.error('Error sending email:', error);
      setIsSending(false);
    }
  };


  return (
<BrowserRouter>
  <div>
    <ToastContainer />
    
    <header className="flex flex-col items-center w-full bg-current pt-4 md:pt-0">
      <div className="flex flex-row items-center justify-between w-full px-6 text-white">
        {/* Logo */}
        <b className="text-xl md:text-4xl">Portfolio</b>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 md:top-4 left-0 w-full bg-black text-white md:relative md:w-auto md:bg-transparent md:flex md:flex-row items-center md:items-center md:ml-auto md:mt-0 md:space-x-8`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
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
          </ul>

          <button
            className="contact-me border-2 p-1.5 md:p-2.5 md:ml-8 mt-4 md:mt-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#footer">Contact Me</a>
          </button>
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
        Mhamad Jomaa,a skilled MERN stack developer with hands-on experience
      </p>
      <div className="contact">
        <p>+96170583380</p>
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
      <p>&copy; Portfolio 2024 | Mhamad Jomaa</p>
    </div>
  </div>
</footer>


    
  </div>
</BrowserRouter>
);
}

export default App;
