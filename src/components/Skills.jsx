import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: 'Web Development', skills: [
      { name: 'HTML, CSS, JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'WordPress, Wix', level: 70 }
    ]
  },
  { category: 'MERN Stack', skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Express.js', level: 65 }
    ]
  },
  { category: 'Programming Languages', skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'C', level: 60 }
    ]
  },
  { category: 'Tools & Platforms', skills: [
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 }
    ]
  }
];

const projects = [
  {
    name: 'ShivaTrades (Stock Trading Platform)',
    technologies: 'React.js, Node.js, Express, MongoDB',
  },
  {
    name: 'MyTodo App',
    technologies: 'React.js, Tailwind CSS',
  },
  {
    name: 'Mishthy Yog Sadhna',
    technologies: 'WIX',
  },
  {
    name: 'Spotify Clone',
    technologies: 'HTML, CSS, JavaScript',
  },
  {
    name: 'Simple Calculator',
    technologies: 'HTML, CSS, JavaScript',
  },
  {
    name: 'Official Portfolio',
    technologies: 'Vite, React, Tailwind CSS',
  },
  {
    name: 'Netflix Clone Frontend',
    technologies: 'HTML, CSS',
  },
];

const Skills = () => {
  const [animatedLevels, setAnimatedLevels] = useState({});
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const levels = {};
      skills.forEach(group => {
        group.skills.forEach(skill => {
          levels[skill.name] = skill.level;
        });
      });
      setAnimatedLevels(levels);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const handleSkillClick = (skillName) => {
    setSelectedSkill(skillName);
    const filtered = projects.filter(project =>
      project.technologies.toLowerCase().includes(skillName.toLowerCase())
    );
    setFilteredProjects(filtered);
    setShowProjectsModal(true);
  };

  const closeModal = () => {
    setShowProjectsModal(false);
    setSelectedSkill(null);
  };

  return (
    <div id="content" className="relative min-h-screen text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
        Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">{group.category}</h2>
            <div className="space-y-4">
              {group.skills.map((skill, i) => (
                <div
                  key={i}
                  className="relative cursor-pointer"
                  onClick={() => handleSkillClick(skill.name)}
                >
                  <div className="text-lg font-medium text-gray-200 mb-1">
                    {skill.name}
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{
                        width: `${animatedLevels[skill.name] || 0}%`,
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${animatedLevels[skill.name]}%` }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    ></motion.div>
                  </div>
                  <div
                    className="absolute -top-8 right-0 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      left: `calc(${animatedLevels[skill.name]}% - 20px)`,
                    }}
                  >
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {showProjectsModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-gray-800 rounded-lg p-8 w-full max-w-3xl max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Projects using {selectedSkill}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700 p-4 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-200">{project.name}</h3>
                    <p className="text-gray-400 text-sm mt-2">
                      <strong>Tech Stack:</strong> {project.technologies}
                    </p>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-400">No projects found for this skill.</p>
              )}
            </div>
            <button
              onClick={closeModal}
              className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Skills;