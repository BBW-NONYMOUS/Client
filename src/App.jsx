import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import Home from "./components/Hero";
import About from "./components/About";
// import Videos from "./components/Video";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";




// Navbar Component with Framer Motion
const Navbar = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery/Video" },
    { to: "/contact", label: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sticky top-0 z-10 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Name */}
        <motion.div
          className="text-white text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Cutie
        </motion.div>

        {/* Desktop  */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.1, color: "#c7d2fe" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              <Link
                to={item.to}
                className="text-white text-lg font-medium hover:text-gray-300"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile*/}
        <div className=" md:hidden opacity-5 flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-white w-8 h-8" />
            ) : (
              <Menu className="text-white w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-indigo-700/90 backdrop-blur-md flex flex-col space-y-4 px-6 py-6 mt-2 rounded-xl shadow-lg"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-white text-lg font-medium hover:text-gray-300 border-b-2 border-transparent hover:border-white transition-all duration-300 pb-1"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>

  );
};

// Main Component
const App = () => {
  return (
    <div>

      {/* <Home/> */}
      <BrowserRouter>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/videos" element={<Videos />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </BrowserRouter>
    </div>
  );
};

export default App;
