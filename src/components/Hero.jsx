import { motion } from "framer-motion";
import Char from '../assets/images/main.jpg'
import AOS from 'aos';
import { ReactTyped } from 'react-typed';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import backMusic from '../assets/video/backMusic.mp4';

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 2,
      once: true
    })
  }, []);

  return (
    <div className="pt-20 sm:pt-28 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 relative overflow-hidden">

      {/* 🎵 Background Music */}
      <audio autoPlay loop>
        <source src={backMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div
        className="relative container mx-auto px-6 sm:px-8 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16"
        data-aos="fade-up"
      >
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1
            className="text-[45px] sm:text-[50px] lg:text-[55px] font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-md"
            data-aos="fade-up"
          >
            <ReactTyped
              strings={["Hi, I'm Allyssa Rose G Reyes"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-2xl shadow-lg hover:bg-indigo-50 transition transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image with 3d animation */}
        <motion.div
          className="md:w-2/6 flex justify-center z-10"
          whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.img
            src={Char}
            alt="Profile"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-[60%] md:h-[100%] object-cover rounded-2xl shadow-2xl shadow-indigo-400"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </motion.div>
      </div>

      <div className="absolute top-0 -left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </div>
  );
}

export default Home;
