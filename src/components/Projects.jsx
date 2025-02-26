import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'ShivaTrades (Stock Trading Platform)',
    date: 'Aug 2024',
    description:
      'A full-stack stock trading platform simulating stock purchasing, portfolio management, and order tracking.',
    technologies: 'React.js, Node.js, Express, MongoDB',
    github: 'https://github.com/ShivangSaxena05/Zerodha-Clone',
  },
  {
    name: 'MyTodo App',
    date: 'Aug 2024',
    description:
      'A web-based task management application with features to add, edit, delete, and mark tasks complete.',
    technologies: 'React.js, Tailwind CSS',
    github: 'https://github.com/ShivangSaxena05/My-Todo',
  },
  {
    name: 'Mishthy Yog Sadhna',
    date: 'Jul 2024',
    description:
      'A responsive website for a yoga institute built using WIX, featuring multiple pages and user interactions.',
    technologies: 'WIX',
    github: '#',
  },
  {
    name: 'Spotify Clone',
    date: 'Nov 2023',
    description:
      'A Spotify-like music player web app with song navigation, play/pause functionality, and a responsive UI.',
    technologies: 'HTML, CSS, JavaScript',
    github: 'https://github.com/ShivangSaxena05/Spotify_Clone',
  },
  {
    name: 'Simple Calculator',
    date: '2023',
    description:
      'A working calculator built using HTML, CSS, and JavaScript.',
    technologies: 'HTML, CSS, JavaScript',
    github: '#',
  },
  {
    name: 'Official Portfolio',
    date: '2024',
    description:
      'A dynamic portfolio built with Vite, React, and Tailwind CSS, showcasing personal projects and skills.',
    technologies: 'Vite, React, Tailwind CSS',
    github: '#',
  },
  {
    name: 'Netflix Clone Frontend',
    date: '2023',
    description:
      'A frontend clone of Netflix created using HTML and CSS, demonstrating layout and design skills.',
    technologies: 'HTML, CSS',
    github: '#',
  },
];

const Projects = () => {
  return (
    <div id="content" className="min-h-screen text-white p-8 pt-20">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-700 hover:border-purple-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-200">
              {project.name}
            </h2>
            <p className="text-gray-400 text-sm mb-2">{project.date}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <p className="text-gray-400 text-sm mb-4">
              <strong>Tech Stack:</strong> {project.technologies}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;