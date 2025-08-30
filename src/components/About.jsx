import { motion } from "framer-motion";
import Char from '../assets/images/main.jpg'

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/*  background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section with 3D Animation */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.img
            src={Char} 
            alt="About Me"
            className="w-52 h-52 sm:w-64 sm:h-64 object-cover rounded-2xl shadow-2xl shadow-indigo-400"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me 
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
            I am <span className="font-semibold text-indigo-600">Allyssa Rose Reyes</span>, 
            a motivated and hardworking student currently taking up 
            <span className="font-semibold text-indigo-600"> Information Technology </span> 
            at <span className="font-semibold text-pink-600">Golden State College</span>.  
            I am passionate about learning new skills, especially in 
            <span className="font-semibold text-indigo-600"> programming, design, and business</span>.
          </p>

          
        </motion.div>
      </div>
    </section>
  );
}