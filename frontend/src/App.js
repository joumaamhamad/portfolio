
import React, {  Suspense, useState } from 'react';
import './App.css';
import { BrowserRouter  , Routes , Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { FaFacebook  , FaInstagram , FaLinkedin, FaGithub  } from 'react-icons/fa';
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
    
    <header className='flex flex-col items-center w-full bg-current py-6'>

      <div className='flex flex-row md:flex-row items-center justify-between text-white pl-0.5 pb-7'>

        <b className='md:text-4xl text-xl mb-6 md:mb-2 md:mr-96'>Portfolio</b>

        <div className='flex flex-row items-center md:flex-row md:items-center'>
          <ul className='flex flex-wrap space-x-4 mb-4 md:mb-0 md:mr-8'>
            <li className='mb-2 md:mb-0l'><Link to={'/'}>Home</Link></li>
            <li className='mb-2 md:mb-0'><Link to={'/#about'}>About</Link></li>
            <li className='mb-2 md:mb-0'><Link to={'/#skills'}>Skills</Link></li>
            <li className='mb-2 md:mb-0'><Link to={'/#projects'}>Projects</Link></li>
            <li className='mb-2 md:mb-0'><Link to={'/#experience'}>Experience</Link></li>
          </ul>
          
          <button className='contact-me border-2 md:mt-6 md:p-2.5 md:ml-8 ml-4 p-1.5 mb-6'><a href='#footer'>Contact Me</a></button>
          
        </div>
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

    <footer id='footer' className=" bg-gray-800 text-gray-300 py-12 pr-8">
      <div className="footer container mx-auto flex flex-wrap space-x-12">
        <div className="footer-section w-full md:w-1/4 space-y-6 mb-8 ml-8">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Hi, I'm Mhamad Jomaa, a skilled MERN stack developer with hands-on experience and a portfolio of successful projects. Let's collaborate to bring your ideas to life.
          </p>
          <div className="contact">
            <span className='flex space-x-2'>
              +96170583380
            </span>
            <span>
              mhamad_jomaa@outlook.com
            </span>
          </div>

          <div className="socials flex  mt-4">
            <a href="https://www.facebook.com/mhamad.jomaa" className="text-gray-300 hover:text-gray-400 mr-4"><FaFacebook className='size-7' /></a>
            <a href="https://github.com/joumaamhamad" className="text-gray-300 hover:text-gray-400 mr-4"><FaGithub className='size-7 ml-6' /></a>
            <a href="https://www.instagram.com/mhamadjomaa8/" className="text-gray-300 hover:text-gray-400 mr-4"><FaInstagram className='size-7 ml-6' /></a>
            <a href="https://www.linkedin.com/in/mhamad-jomaa-76409a230/" className="text-gray-300 hover:text-gray-400"><FaLinkedin className='size-7 ml-6' /></a>
          </div>
        </div>

        <div className="footer-section w-full md:w-1/4 mb-8">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className='mb-1.5'><a href="/" className="text-gray-300 hover:text-gray-400">Home</a></li>
            <li className='mb-1.5'><a href="/?#about" className="text-gray-300 hover:text-gray-400">About</a></li>
            <li className='mb-1.5'><a href="/?#skills" className="text-gray-300 hover:text-gray-400">Skills</a></li>
            <li className='mb-1.5'><a href="/" className="text-gray-300 hover:text-gray-400">Portfolio</a></li>
            
          </ul>
        </div>
        <div className="footer-section w-full md:w-1/3 mb-8">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={sendEmail}>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" className="bg-gray-700 text-gray-300 w-full py-2 px-3 mb-3 rounded-sm" placeholder="Your email..." />
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-gray-700 text-gray-300 w-full py-2 px-3 mb-3 rounded-sm" placeholder="Your message..."></textarea>
            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-sm" disabled={isSending}>
              {isSending ? 'loading...' : 'Send'}
            </button>
          </form>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700">
        &copy; Portfolio 2024 | Mhamad Jomaa
      </div>
    </footer>
    
  </div>
</BrowserRouter>
);
}

export default App;
