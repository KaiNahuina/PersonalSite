import React, { useState } from 'react';
import Background from './components/Background';
import { motion } from 'framer-motion';
import foodbank from './Media/foodbank.jpeg';
import risktool from './Media/risktool.jpeg';
import entity from './Media/entity.png';



const Carousel = () => {
  const images = [
    { src: foodbank, caption: 'Foodbank Project', link: 'https://github.com/KaiNahuina/foodbank-project' },
    { src: risktool, caption: 'Risk Assessment Tool', link: 'https://github.com/KaiNahuina/AppraisalTool'},
    { src: entity, caption: 'Entity Solutions Ltd', link: 'https://entitysolutionsltd.com/'},
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mt-8 bg-gray-800 rounded-lg shadow-lg neumorphic mx-auto max-w-4xl p-4">
      <img
        src={images[currentIndex].src}
        alt={`Slide ${currentIndex}`}
        className="rounded-lg w-full object-contain" // Change object-cover to object-contain
        style={{ height: 'auto', maxHeight: '60vh' }} // Keep the existing style
      />

      <div className="bottom-0 left-0 w-full p-4 text-center mt-4">
        <p className="text-lg font-semibold text-white">{images[currentIndex].caption}</p>
        <a 
          href={images[currentIndex].link} // GitHub link
          className="text-blue-400 hover:underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Site
        </a>
      </div>
      <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:shadow-xl transition duration-300 text-3xl">
          &#8592; {/* Left arrow */}
      </button>
      <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:shadow-xl transition duration-300 text-3xl">
          &#8594; {/* Right arrow */}
      </button>

    </div>
  );
};






function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isHighlightsOpen, setIsHighlightsOpen] = useState(false);

  return (
    <section className="relative min-h-screen text-white">
      <Background />

      <div className="relative z-10 max-w-4xl mx-auto p-8 mt-16 bg-opacity-90 bg-gray-800 rounded-lg shadow-lg">
        <motion.h1
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Welcome to Kai's Website
        </motion.h1>

        <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => {
            setIsAboutOpen(true);
            setIsHighlightsOpen(false);
          }}
          className="px-4 py-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition duration-300 w-full text-center"
        >
          About Me
        </button>

        <button
          onClick={() => {
            setIsHighlightsOpen(true);
            setIsAboutOpen(false);
          }}
          className="px-4 py-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition duration-300 w-full text-center"
        >
          Key Highlights
        </button>

        </div>

        <div className="mt-4">
          {isAboutOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-700 p-4 rounded-lg mt-4 text-center"
            >
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="mb-4">Welcome to my professional portfolio! My name is Ikaika Nahuina</p>
              <p className="mb-4">I am a skilled software developer with experience in Full Stack Web Development. Comfortable with frameworks such as the ReactJS, NodeJS and ThreeJS. Graduated with a Bachelors in Software Engineering from the University of Chester. Let's work together to bring your ideas to life!</p>
            </motion.div>
          )}

          {isHighlightsOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-700 p-4 rounded-lg mt-4 text-center"
            >
              <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
              <p className="mb-4">Here are some key highlights about me:</p>
              <p>Languages: English and Spanish</p>
              <p>Programming languages: HTML, CSS, JavaScript, C++, Java, Python, Swift</p>
              <p>Frameworks: React, Bootstrap, ASP.Net Core, WordPress</p>
              <p>Databases: MSSQL, MySQL</p>
              <p>Source Control: Git</p>
            </motion.div>
          )}
        </div>
         
      </div>
      <Carousel />
    </section>
  );
}

export default Home;
