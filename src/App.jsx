import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import backgroundImage from './assets/bg.jpeg'; // Import the background image

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
    {
      path: '/skills',
      element: <Skills />,
    },
  ]);

  return (
    <>
      {/* Apply background image to the entire app */}
      <div
        className="min-h-screen bg-repeat bg-center" // Use bg-repeat to tile the image
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain', // Fit the image within the screen
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <RouterProvider router={router} />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;