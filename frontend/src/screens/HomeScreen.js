import React, { useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Progress from '../components/Progress';
import Card from '../components/Card';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

export default function HomeScreen() {
  const { hash } = useLocation();
  const videoRef = useRef(null);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  
  const downloadFile = () => {
    const fileUrl = 'https://mhamadjomaa.netlify.app/MohamadJomaa.docx';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'MohamadJomaa.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Animations */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='flex flex-col text-center text-white pt-16 md:pt-48 md:text-center mb-28 px-4 md:px-0'
      >
        <div className='md:w-3/4 md:mx-auto md:mb-22 py-12'>
          <motion.b variants={itemVariants} className='text-2xl'>Hi There!!</motion.b><br/>
          <motion.h1 
            variants={itemVariants}
            className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'
          >
            I'm Mohamad Jomaa
          </motion.h1><br/>
          <motion.b 
            variants={itemVariants}
            className='text-sm md:text-lg lg:text-xl xl:text-2xl'
          >
            Full Stack (MERN Stack) | Master In Computer Science
          </motion.b>
          <motion.div 
            variants={itemVariants}
            className='flex flex-row space-x-6 mt-6 items-center justify-center md:space-x-4 md:mt-3 md:justify-center'
          >
            <motion.a whileHover={{ scale: 1.2 }} href='https://www.facebook.com/mhamad.jomaa'>
              <FaFacebook className='size-6 md:size-7 hover:text-blue-500 transition-colors' />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href='https://github.com/joumaamhamad'>
              <FaGithub className='size-6 md:size-7 hover:text-gray-400 transition-colors' />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href='https://www.instagram.com/mhamadjomaa8/'>
              <FaInstagram className='size-6 md:size-7 hover:text-pink-500 transition-colors' />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href='https://www.linkedin.com/in/mhamad-jomaa-76409a230/'>
              <FaLinkedin className='size-6 md:size-7 hover:text-blue-400 transition-colors' />
            </motion.a>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className='text-center mt-8 md:text-center'
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(99, 102, 241, 0.1)",
                boxShadow: "0 0 10px rgba(99, 102, 241, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className='border-2 px-4 h-10 rounded-lg border-indigo-500 hover:bg-indigo-500/10 transition-all text-sm md:text-base'
              onClick={() => downloadFile()}
            >
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section with Animations - Made responsive */}
      <motion.div
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col md:flex-row items-center justify-center pt-12 pb-20 md:pb-44 w-full px-4 md:px-0"
      >
        <motion.div 
          variants={slideInFromLeft}
          className="w-full md:w-1/2 h-64 md:h-1/2 border-2 rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0"
        >
          <img
            // ref={videoRef}
            // controls
            // poster="../images/img1.webp"
            src="../images/img3.jpg"
            // type="video/mp4"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          variants={slideInFromRight}
          className="text-white w-full md:w-1/3 md:h-1/2 md:ml-6 mt-0 md:mt-6"
        >
          <div className="text-center md:text-left">
            <motion.b 
              variants={fadeIn}
              className="text-2xl md:text-3xl py-6 md:py-12 font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              About Me
            </motion.b>
            <motion.p 
              variants={fadeIn}
              className="mt-4 md:mt-6 text-sm md:text-lg leading-relaxed"
            >
              A dedicated and highly skilled MERN (MongoDB, Express.js,
              React.js, Node.js) stack developer with a passion for creating
              robust and innovative web applications. With a strong foundation
              in full-stack development, I am committed to delivering
              high-quality, scalable, and user-friendly solutions that meet and
              exceed client expectations. Seeking opportunities to contribute my
              expertise in front-end and back-end development to a dynamic team,
              where I can continue to grow professionally and create
              cutting-edge web experiences.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

 {/* Skills Section - Updated to match screenshot */}
<motion.div 
  id='skills' 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={containerVariants}
  className='flex flex-col items-center text-white py-12 px-4 md:px-0'
>
  <motion.div variants={itemVariants}>
    <b className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'>
      My Skills
    </b>
  </motion.div>
  <div className='flex flex-col md:flex-row items-center md:items-start justify-center w-full mt-8'>

    {/* Left Column - Personal Info (matches screenshot exactly) */}
    <motion.div 
      variants={scaleUp}
      className='flex flex-col space-y-6 w-full md:w-1/3 bg-white/10 backdrop-blur-sm p-6 rounded-xl'
    >
      <div className='space-y-6'>
        <div>
          <h3 className='text-xl md:text-2xl font-bold mb-4'>Personal Experience</h3>
          <ul className='list-disc pl-5 space-y-2'>
            <li>I have a personal experience in the web development domain specifically in mern stack.</li>
            <li>I have 2 years experience in the education domain (Math, Physics and Informatics)</li>
            <li>I have many projects in my LinkedIn and Github pages.</li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl md:text-2xl font-bold mb-4'>Education</h3>
          <ul className='list-disc pl-5 space-y-2'>
            <li>I have <strong>Bachelor's</strong> and <strong>Master 1</strong> degree in programing (Computer Science) from Lebanese University.</li>
            <li>Since November 2020 Lebanese University Nabatie, Lebanon.</li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl md:text-2xl font-bold mb-4'>Languages</h3>
          <ul className='list-disc pl-5 space-y-2'>
            <li>Arabic</li>
            <li>French</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </motion.div>

    {/* Right Columns - Skills Progress Bars */}
    <div className="flex flex-col md:flex-row w-full md:w-auto mt-8 md:mt-0 md:ml-12">
      <motion.div variants={slideInFromRight} className='flex flex-col items-start w-full md:w-auto px-4 md:px-0'>
        <h3 className='text-xl md:text-2xl font-bold mb-4'>Personal Skills</h3>
        <Progress value={100} title='HTML:' />
        <Progress value={100} title='CSS:' />
        <Progress value={100} title='Java Script:' />
        <Progress value={85} title='Nextjs:' />
        <Progress value={85} title='ReactJs:' />
        <Progress value={80} title='NodeJs:' />
        <Progress value={80} title='ExpressJs:' />
        <Progress value={80} title='MongoDB:' />
        <Progress value={80} title='Git/GitHub:' />
      </motion.div>

      <motion.div variants={slideInFromRight} className='flex flex-col items-start w-full md:w-auto mt-8 md:mt-0 md:ml-12 px-4 md:px-0'>
        <h3 className='text-xl md:text-2xl font-bold mb-4'>University Skills</h3>
        <Progress value={70} title='C Language:' />
        <Progress value={80} title='MySQL:' />
        <Progress value={65} title='Java:' />
        <Progress value={70} title='Graphic User Interface:' />
        <Progress value={90} title='Work with Linux:' />
        <Progress value={85} title='PHP:' />
        <Progress value={70} title='JQuery/Ajax:' />
      </motion.div>
    </div>
  </div>
</motion.div>

      {/* Experience Section - Made responsive */}
      <motion.section 
        id="experience" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-12 md:py-24 px-4 md:px-24 bg-gray-900"
      >
        <div className="container mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center mb-8 md:mb-12"
          >
            Experience
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div 
              variants={slideInFromLeft}
              whileHover={{ y: -5 }}
              className="bg-gray-800/80 backdrop-blur-sm shadow-xl rounded-xl p-6 md:p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">HRIS Application</h3>
                  <p className="text-blue-400 text-sm md:text-base">ESA BUSINESS SCHOOL</p>
                  <p className="text-gray-400 text-xs md:text-sm">April 2024 - Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2 pl-4 text-sm md:text-base">
                <li>Currently developing a Human Resource Information System (HRIS) using Next.js with TypeScript, MySQL, and Sequelize.</li>
                <li>The HRIS program is designed for the university's HR department to manage and analyze data for professors and staff.</li>
                <li>Viewing and managing professor data (personal information, salary, education, languages…).</li>
                <li>Managing staff data and tracking resignations.</li>
                <li>Analyzing data with integrated charts and visualizations for better decision-making.</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={slideInFromRight}
              whileHover={{ y: -5 }}
              className="bg-gray-800/80 backdrop-blur-sm shadow-xl rounded-xl p-6 md:p-8 border border-gray-700 hover:border-purple-400 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Certificate</h3>
                  <p className="text-purple-400 text-sm md:text-base">ESA Coding Lab - SE Factory</p>
                  <p className="text-gray-400 text-xs md:text-sm">April 2024 - Now</p>
                </div>
              </div>
              <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2 pl-4 text-sm md:text-base">
                <li>ESA Business School: Full-Stack Developers (HTML5, CSS3, MySQL, MERN STACK), 2024, (Lebanon).</li>
                <li>ESIEE-IT France: Full-Stack Developers (HTML5, CSS3, MySQL, MERN STACK), 2024, (Lebanon).</li>
                <li>SE Factory: Introduction Machine Learning, June 2025, (Lebanon).</li>
                <li>SE Factory: Introduction To DevOps, MLOps, and DataOps, July 2025, (Lebanon).</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section - Made responsive */}
      <motion.div 
        id='projects' 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className='flex flex-col items-center text-white py-16 px-4 md:px-0'
      >
        <motion.div variants={itemVariants}>
          <b className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'>
            My Projects
          </b>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          className='flex items-center flex-col flex-wrap w-full'
        >
          <div className='flex flex-col md:flex-row items-center justify-center flex-wrap gap-6 md:gap-12 w-full mt-8'>
            <motion.div variants={itemVariants} className="w-full md:w-auto">
              <Card path='/projects/amazon' src='../images/amazonimage/home.png' title='Amazon Clone Project' />
            </motion.div>
            <motion.div variants={itemVariants} className="w-full md:w-auto">
              <Card path='/projects/yelpcamp' src='../images/yelpcamp/photo0.png' title='YelpCamp Project' />
            </motion.div>
            <motion.div variants={itemVariants} className="w-full md:w-auto">
              <Card path='/projects/university' src='../images/university/photo1.png' title='University Project' />
            </motion.div>
          </div>

          <div className='flex flex-col md:flex-row items-center justify-center flex-wrap gap-6 md:gap-12 w-full mt-6 md:mt-12'>
            <motion.div variants={itemVariants} className="w-full md:w-auto">
              <Card path='/projects/signfrom' src='../images/htmlcss/signin2.png' title='SignIn/Up Forms' />
            </motion.div>
            <motion.div variants={itemVariants} className="w-full md:w-auto">
              <Card path='/projects/frontwebsite' src='../images/htmlcss/christmas/photo1.png' title='HTML/CSS Templates' />
            </motion.div>
            <motion.div variants={itemVariants} className="w-full md:w-auto">
              <Card path='/projects/projectjavascript' src='../images/htmlcssjs/xo.png' title='HTML/CSS/JS Projects' />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Services Section - Made responsive */}
      <motion.div 
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className='py-12 md:py-24 bg-gray-900 px-4 md:px-0'
      >
        <div className='container mx-auto'>
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4'>
              Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              I offer professional services to help bring your digital ideas to life
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto'>
            <motion.div 
              variants={slideInFromLeft}
              whileHover={{ y: -10 }}
              className="bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start mb-4 md:mb-6">
                <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">UI/UX Design</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    I create intuitive and visually appealing user interfaces with a focus on exceptional user experiences. My designs are not just beautiful but also functional and user-friendly.
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-6">
                <span className="inline-block bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full mr-2">Figma</span>
                <span className="inline-block bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full mr-2">Adobe XD</span>
                <span className="inline-block bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full">User Research</span>
              </div>
            </motion.div>

            <motion.div 
              variants={slideInFromRight}
              whileHover={{ y: -10 }}
              className="bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start mb-4 md:mb-6">
                <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Web Development</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    I build high-performance, scalable web applications using modern technologies. From frontend to backend, I deliver complete solutions tailored to your business needs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}