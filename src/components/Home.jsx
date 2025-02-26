import React from 'react';
import myimg from '../assets/Shivang.png';
import AboutMe from './AboutMe';
import GetInTouch from './GetInTouch';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import ErrorBoundary from './ErrorBoundary';
import { motion } from 'framer-motion';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Java Developer', 'Python Developer'],
    loop: 0,
  });

  return (
    <>
      <ErrorBoundary>
        {/* Main Content */}
        <div id="content" className="relative w-full min-h-screen">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center h-screen text-center text-white"
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              Shivang Saxena
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 italic mt-2">
              {text} <Cursor />
            </h2>

            {/* Profile Image */}
            <motion.img
              src={myimg}
              alt="Shivang"
              className="mt-20 h-50 w-40 md:h-70 md:w-60 border-4 border-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 brightness-110"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Other Sections */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-16 min-h-screen"
          >
            <AboutMe />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <GetInTouch />
          </motion.div>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Home;
