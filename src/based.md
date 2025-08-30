<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/framer-motion@11/dist/framer-motion.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        const { BrowserRouter, Routes, Route, Link } = window.ReactRouterDOM;
        const { motion } = window.FramerMotion;

        // Navigation Component
        function Navbar() {
            return (
                <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sticky top-0 z-10 shadow-lg">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="text-white text-2xl font-bold tracking-tight">My Portfolio</div>
                        <div className="space-x-6">
                            <Link to="/" className="text-white hover:text-indigo-200 transition duration-300">Home</Link>
                            <Link to="/about" className="text-white hover:text-indigo-200 transition duration-300">About</Link>
                            <Link to="/gallery" className="text-white hover:text-indigo-200 transition duration-300">Projects</Link>
                            <Link to="/video" className="text-white hover:text-indigo-200 transition duration-300">Videos</Link>
                            <Link to="/contact" className="text-white hover:text-indigo-200 transition duration-300">Contact</Link>
                        </div>
                    </div>
                </nav>
            );
        }

        // Home Component
        function Home() {
            return (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="min-h-screen bg-gray-100 flex items-center justify-center"
                >
                    <div className="container mx-auto p-4 text-center">
                        <h1 className="text-5xl font-extrabold text-indigo-800 mb-4">Welcome to My Portfolio</h1>
                        <p className="text-xl text-gray-600 mb-6">Showcasing my creative projects and skills</p>
                        <Link to="/gallery" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">View My Work</Link>
                    </div>
                </motion.div>
            );
        }

        // About Component
        function About() {
            return (
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto p-4 py-12"
                >
                    <h1 className="text-4xl font-bold text-indigo-800 mb-6">About Me</h1>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <p className="text-lg text-gray-700 mb-4">I'm a passionate developer and designer with a focus on creating impactful digital experiences.</p>
                            <p className="text-lg text-gray-700">Skills: ReactJS, JavaScript, Tailwind CSS, UI/UX Design, and more.</p>
                        </div>
                        <div className="md:w-1/2 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                            <span className="text-gray-500">Profile Image Placeholder</span>
                        </div>
                    </div>
                </motion.div>
            );
        }

        // Gallery (Projects) Component
        function Gallery() {
            const projects = [
                { id: 1, title: "Project 1", description: "A web app built with React and Tailwind CSS.", link: "#" },
                { id: 2, title: "Project 2", description: "A mobile-responsive e-commerce platform.", link: "#" },
                { id: 3, title: "Project 3", description: "A data visualization dashboard.", link: "#" },
                { id: 4, title: "Project 4", description: "A creative portfolio website.", link: "#" },
            ];

            return (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto p-4 py-12"
                >
                    <h1 className="text-4xl font-bold text-indigo-800 mb-6">My Projects</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map(project => (
                            <motion.div
                                key={project.id}
                                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-gray-200 h-48 mb-4 rounded flex items-center justify-center">
                                    <span className="text-gray-500">Project Image {project.id}</span>
                                </div>
                                <h2 className="text-xl font-semibold text-indigo-800">{project.title}</h2>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <a href={project.link} className="text-indigo-600 hover:underline">View Project</a>