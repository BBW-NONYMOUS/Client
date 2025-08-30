import { motion } from "framer-motion";
import Image_One from '../assets/images/image_a.jpg';
import Image_two from '../assets/images/image_q.jpg'; 
import Image_three from '../assets/images/image_u.jpg';
import Image_four from '../assets/images/image_t.jpg';
import Image_five from '../assets/images/image_w.jpg';
import Personal_vid from "../assets/video/image_l.mp4";

// array of image objects 
const images = [
  { id: 1, src: Image_One, alt: "Image 1" },
  { id: 2, src: Image_two, alt: "Image 2" },
  { id: 3, src: Image_three, alt: "Image 3" },
  { id: 4, src: Image_four, alt: "Image 4" },
  { id: 5, src: Image_five, alt: "Image 5" },
];

export default function Gallery() {
  return (

     <div className="w-full">
      {/* ================= VIDEO SECTION ================= */}
      <section className="w-full h-screen relative flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-pink-50 overflow-hidden">
        {/* Video Background */}
        <motion.video
          src={Personal_vid}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
              Welcome to My Video Page
            </h1>
            <p className="mt-4 text-lg sm:text-2xl text-gray-200">
              I am{" "}
              <span className="text-indigo-400 font-bold">Allyssa Rose Reyes</span>, a motivated IT student from{" "}
              <span className="text-pink-600">Golden State College</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section
        id="gallery"
        className="relative bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-20 px-6 sm:px-12 lg:px-20"
      >
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-indigo-600">Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my favorite moments, experiences, and creative works.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-2xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <span className="text-white text-lg font-semibold">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}