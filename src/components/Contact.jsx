import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState(null);

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => setPopupMessage(null), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_h8hinbb',
        'template_jttvy2g',
        form.current,
        { publicKey: '0NbhL8Wwd5LA-nKV_' } // Use your EmailJS public key
      )
      .then(
        () => {
          showPopup('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          showPopup('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div id="content" className="min-h-screen text-white p-8 pt-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
        Contact Me
      </h1>

      <motion.div
        className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl shadow-lg w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Enter your message"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Let's Connect</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/shivangsaxena05" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/shivang-saxena-699974267/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/godscriptedvansh/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="mailto:shivangsaxena40@gmail.com" className="text-gray-400 hover:text-pink-400">
            <FaEnvelope className="w-8 h-8" />
          </a>
        </div>
      </div>

      {popupMessage && (
        <motion.div
          className="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <span>{popupMessage}</span>
          <button onClick={() => setPopupMessage(null)} className="ml-4 text-gray-400 hover:text-white">
            &times;
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;