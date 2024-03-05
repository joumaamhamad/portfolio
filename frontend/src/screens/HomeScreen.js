import React, { useEffect } from 'react';
import aboutImage from '../images/img1.webp';
import homeAmazon from '../images/amazonimage/home.png';
import homeYelp from '../images/yelpcamp/photo0.png';
import signinImage from '../images/htmlcss/signin2.png';
import homeUniversity from '../images/university/photo1.png';
import htmlcssImage from '../images/htmlcss/christmas/photo1.png';
import htmlcssjsImage from '../images/htmlcssjs/xo.png';
import { Link } from 'react-router-dom';
import { FaFacebook  , FaInstagram , FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImage from '../images/portfolioimage.jpeg';
import { useLocation } from 'react-router-dom';





export default function HomeScreen() {


  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);


  const downloadFile = () => {
    const fileUrl = 'http://localhost:3000/MhamadJomaa.docx';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    
    // Set the filename that will be used when downloading the file
    link.setAttribute('download', 'MhamadJomaa.docx');
    
    // Programmatically trigger the download
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  }



//flex mt-3 ml-44 md:flex md:mt-3 md:mr-16 md:ml-0

return (
    <div>

<div className='flex text-center flex-col-reverse text-white pt-16 md:flex-row md:pt-48 md:text-left'>

  <div className='md:w-1/2 md:ml-32 md:mb-22 ml-4 py-12'>
    <b className='text-2xl'>Hi There!!</b><br/>
    <h1 className='text-2xl md:text-4xl'>Im Mhamad Jomaa</h1><br/>
    <b className='text-xs md:text-lg lg:text-xl xl:text-2xl'>
      Full Stack (MERN Stack) | Seeking Internship Opportunities
    </b>
    <div className='md:flex md:flex-row md:space-x-4 md:mt-3 md:justify-start flex flex-row space-x-3 mt-3 items-center justify-center'>
      <a href='https://www.facebook.com/mhamad.jomaa'><FaFacebook className='size-7' /></a>
      <a href='https://github.com/joumaamhamad'><FaGithub className='size-7 ml-6' /></a>
      <a href='https://www.instagram.com/mhamadjomaa8/'><FaInstagram className='size-7 ml-6' /></a>
      <a href='https://www.linkedin.com/in/mhamad-jomaa-76409a230/'><FaLinkedin className='size-7 ml-6' /></a>
    </div>
    <button className='border-2 mt-8 px-3.5 h-10' onClick={() => downloadFile()}>Download CV</button>
  </div>

<div className='md:relative md:bottom-20 md:w-1/4 md:h-1/4 md:mt-0 mt-8 mb-8 ml-24 w-1/2'>
  <img className='h-full w-full rounded-full border-4 mx-auto md:ml-0 md:mb-32' alt='ok' src={profileImage} />
</div>
</div>

      <div id='about' className='flex flex-wrap items-center justify-center pt-12 pb-44 w-full'>

        <div className='md:w-1/2 md:h-1/2 border-2'>
          <img className='h-full w-full' src={aboutImage} alt=''></img>
        </div>

        <div className='text-white md:w-1/3 md:h-1/2 ml-9 mt-6'>
          <div>
            <b className='text-3xl py-12'>About Me</b>
            <p className='mt-6'>A dedicated and highly skilled MERN (MongoDB, Express.js, React.js, Node.js) stack developer with a passion for creating robust and innovative web applications. With a strong foundation in full-stack development, I am committed to delivering high-quality, scalable, and user-friendly solutions that meet and exceed client expectations. Seeking opportunities to contribute my expertise in front-end and back-end development to a dynamic team, where I can continue to grow professionally and create cutting-edge web experiences</p>
          </div>
        </div>
      </div>

      <div id='skills' className='flex flex-col items-center text-white py-12'>
        <div><b className='text-3xl md:text-2xl'>My Skills</b></div>
        <div className='md:flex md:items-center md:text-white md:flex-wrap md:py-24 md:space-x-14'>

          <div className='md:flex md:flex-col md:space-y-8 md:w-1/3 md:ml-24 md:pt-8 md:pl-8 md:pb-8 md:pr-8 md:border-2 w-3/4 py-12 ml-12'>

            <div className='flex flex-col space-y-2'>
              <div><b className='text-2xl py-2.5 underline'>Experience</b></div>
              <div>
                <ul className='list-disc'>
                  <li className='text-l'>I have a personal experience in the web development domain specifically in mern stack.</li>
                  <li className='text-l'>I have 2 years experience in the education domain (Math, Physics and Informatics)</li>
                  <li className='text-l'>I have many projects in my LinkedIn and Github pages.</li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col space-y-2'>
              <div><b className='text-2xl py-2.5 underline'>Education</b></div>
              <div>
                <ul className='list-disc'>
                  <li className='text-l'>I have Bachelor’s degree in programing (Computer Science) from Lebanese University.</li>
                  <li className='text-l'>Since November 2020 Lebanese University Nabatie, Lebanon.</li>
                  <li className='text-l'>Currently, I am studying for a master’s degree at the Lebanese university.</li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col space-y-2'>
              <div><b className='text-2xl py-2.5 underline'>Languages</b></div>
              <div>
                <ul className='list-disc'>
                  <li className='text-l'>Arabic</li>
                  <li className='text-l'>French</li>
                  <li className='text-l'>English</li>
                </ul>
              </div>
            </div>

          </div>

          <div className='md:flex md:flex-col md:items-start ml-12'>
            <b className='text-2xl py-2.5 underline'>Personal Skills</b>
            <div className='py-1'>
              <p>HTML:</p>
              <progress className='md:w-96 w-72' value="100" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>CSS:</p>
              <progress className='md:w-96 w-72' value="100" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>Java Script:</p>
              <progress className='md:w-96 w-72' value="100" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>ReactJs:</p>
              <progress className='md:w-96 w-72' value="85" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>NodeJs:</p>
              <progress className='md:w-96 w-72' value="80" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>ExpressJs:</p>
              <progress className='md:w-96 w-72' value="80" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>MongoDB:</p>
              <progress className='md:w-96 w-72' value="80" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>Git/GitHub:</p>
              <progress className='md:w-96 w-72' value="80" max="100"></progress>
            </div>
          </div>

          <div className='md:flex md:flex-col md:items-start mt-12 ml-12'>
            <b className='text-2xl py-2.5 underline'>University Skills</b>
            <div className='py-1'>
              <p>C Language:</p>
              <progress className='md:w-96 w-72' value="70" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>MySQL:</p>
              <progress className='md:w-96 w-72' value="80" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>Java:</p>
              <progress className='md:w-96 w-72' value="65" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>Graphic User Interface:</p>
              <progress className='md:w-96 w-72' value="70" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>Work with Linux.:</p>
              <progress className='md:w-96 w-72' value="100" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>PHP:</p>
              <progress className='md:w-96 w-72' value="85" max="100"></progress>
            </div>
            <div className='py-1'>
              <p>JQuery/Ajax:</p>
              <progress className='md:w-96 w-72' value="70" max="100"></progress>
            </div>
          </div>

        </div>
      </div>

      <div id='projects' className='flex flex-col items-center text-white py-12'>
        <div><b className='text-3xl md:text-2xl'>My Projects</b></div>
        <div className='flex items-center flex-col flex-wrap py-24'>
          <div className='md:flex md:items-center md:justify-center md:flex-wrap md:space-x-12'>
            <div className='cursor-pointer w-80 h-96 text-center border-4 mt-32 shadow shadow-white md:duration-200 md:delay-300 md:hover:scale-105'>
              <Link to={'/projects/amazon'}>
                <img className='h-full w-full' src={homeAmazon} alt='' />
              </Link>
              <br/>
              <b>Amazon Clone Project</b>
            </div>

            <div className='cursor-pointer w-80 h-96 text-center border-4 mt-32 shadow shadow-white md:duration-200 md:delay-300 md:hover:scale-105'>
              <Link to={'/projects/yelpcamp'}>
                <img className='h-full w-full' src={homeYelp} alt=''></img><br/>
              </Link>
              <b>YelpCamp Project</b>
            </div>

            <div className='cursor-pointer w-80 h-96 text-center border-4 mt-32 shadow shadow-white md:duration-200 md:delay-300 md:hover:scale-105'>
              <Link to={'/projects/university'}>
                <img className='h-full w-full' src={homeUniversity} alt=''></img><br/>
              </Link>
              <b>University Project</b>
            </div>
          </div>

          <div className='md:flex md:items-center md:justify-center md:flex-wrap md:space-x-12'>
            <div className='cursor-pointer w-80 h-96 text-center border-4 mt-32 shadow shadow-white md:duration-200 md:delay-300 md:hover:scale-105'>
              <Link to={'/projects/signfrom'}>
                <img className='h-full w-full' src={signinImage} alt=''></img><br/>
              </Link>
              <b>SignIn/Up Forms</b>
            </div>

            <div className='cursor-pointer w-80 h-96 text-center border-4 mt-32 shadow shadow-white md:duration-200 md:delay-300 md:hover:scale-105'>
              <Link to={'/projects/frontwebsite'}>
                <img className='h-full w-full' src={htmlcssImage} alt=''></img><br/>
              </Link>
              <b>HTML/CSS Templates</b>
            </div>

            <div className='cursor-pointer w-80 h-96 text-center border-4 mt-32 shadow shadow-white md:duration-200 md:delay-300 md:hover:scale-105'>
              <Link to={'/projects/projectjavascript'}>
                <img className='h-full w-full' src={htmlcssjsImage} alt=''></img><br/>
              </Link>
              <b>HTML/CSS/JS Projects</b>
            </div>
          </div>

        </div>
      </div>

      <div className='flex items-center justify-center py-12'>
        <div className='flex flex-col items-center w-3/4 py-44 space-y-12'>
          <div><b className='text-3xl text-white'>Services</b></div>
          <div className='md:flex md:flex-row md:items-center md:justify-center md:ml-0 md:space-x-24 md:py-12 flex-col items-center ml-4 w-full'>
            <div className='flex flex-col items-center justify-cente text-center space-y-2 border-white border-2 w-11/12 bg-white py-24 pr-16 pl-16 mt-12'>
              <div><b className='text-2xl'>UI/UX Design</b></div>
              <div><p className='text-xl'>I do ui/ux design for the website that helps website to get ui/ux look.</p></div>
            </div>

            <div className='flex flex-col items-center justify-center text-center space-y-2 border-white border-2 w-11/12 bg-white py-24 pr-16 pl-16 mt-12'>
              <div><b className='text-2xl'>Web Development</b></div>
              <div><p className='text-xl'>I also develop the websites.I create high performance website with blazing fast speed.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
