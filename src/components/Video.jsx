import Personal_vid from "../assets/video/image_l.mp4";
import { motion } from "framer-motion";

function Video() {
  return (
    
    // Section for Video Background
    <section className="w-full h-screen scroll-auto flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-pink-50 overflow-hidden">
     
      {/* Video */}
      <motion.video
        src={Personal_vid}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover "
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Overlay /-/ dark tint for readability para daw cool haha */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content on top of video used for content gid eh*/}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white opacity-50 drop-shadow-lg">
            Welcome to My Video Page
          </h1>
          <p className="mt-4 text-lg sm:text-2xl text-gray-200">
            I am{" "}
            <span className="text-indigo-400 font-bold">
              Allyssa Rose Reyes
            </span>
            , a motivated IT student from{" "}
            <span className="text-pink-600">Golden State College</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Video;
