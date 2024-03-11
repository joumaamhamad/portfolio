import React, { useEffect } from 'react';
import { FaFacebook  , FaInstagram , FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import ImageCard from '../components/ImageCard';
import Progress from '../components/Progress';


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
  <img className='h-full w-full rounded-full border-4 mx-auto md:ml-0 md:mb-32' alt='ok' src={'../images/portfolioimage.jpeg'} />
</div>
</div>

      <div id='about' className='flex flex-wrap items-center justify-center pt-12 pb-44 w-full'>

        <div className='aboutImageDiv md:w-1/2 md:h-1/2 border-2'>
          <video controls poster="../images/img1.webp">
            <source src="../images/pvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>

        <div className='text-white md:w-1/3 md:h-1/2 ml-6 mt-6'>
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
            <Progress value={100} title={'HTML:'} />
            <Progress value={100} title={'CSS:'} />
            <Progress value={100} title={'Java Script:'} />
            <Progress value={85} title={'ReactJs:'} />
            <Progress value={80} title={'NodeJs:'} />
            <Progress value={80} title={'ExpressJs:'} />
            <Progress value={80} title={'MongoDB:'} />
            <Progress value={80} title={'Git/GitHub:'} />

          </div>

          <div className='md:flex md:flex-col md:items-start mt-12 ml-12'>

            <b className='text-2xl py-2.5 underline'>University Skills</b>
            <Progress value={70} title={'C Language:'} />
            <Progress value={80} title={'MySQL:'} />
            <Progress value={65} title={'Java:'} />
            <Progress value={70} title={'Graphic User Interface:'} />
            <Progress value={90} title={'Work with Linux:'} />
            <Progress value={85} title={'PHP:'} />
            <Progress value={70} title={'JQuery/Ajax:'} />

          </div>

        </div>
      </div>

      <div id='projects' className='flex flex-col items-center text-white py-12'>
        <div><b className='text-3xl md:text-2xl'>My Projects</b></div>
        <div className='flex items-center flex-col flex-wrap py-24'>
          <div className='md:flex md:items-center md:justify-center md:flex-wrap md:space-x-12'>

            <ImageCard path={'/projects/amazon'} src={'../images/amazonimage/home.png'} title={'Amazon Clone Project'} />
            <ImageCard path={'/projects/yelpcamp'} src={'../images/yelpcamp/photo0.png'} title={'YelpCamp Project'} />
            <ImageCard path={'/projects/university'} src={'../images/university/photo1.png'} title={'University Project'} />

          </div>

          <div className='md:flex md:items-center md:justify-center md:flex-wrap md:space-x-12'>

            <ImageCard path={'/projects/signfrom'} src={'../images/htmlcss/signin2.png'} title={'SignIn/Up Forms'} />
            <ImageCard path={'/projects/frontwebsite'} src={'../images/htmlcss/christmas/photo1.png'} title={'HTML/CSS Templates'} />
            <ImageCard path={'/projects/projectjavascript'} src={'../images/htmlcssjs/xo.png'} title={'HTML/CSS/JS Projects'} />

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
