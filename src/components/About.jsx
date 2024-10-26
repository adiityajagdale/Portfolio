import React from "react";
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function About() {
    const contactOptions = [
        { name: "Email", icon: <FaEnvelope />, link: "mailto:adityaa@gmail.com.com" },
        { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aditya-jagdale-5b39a62a2/" },
        { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com/adityajagdale_" },
        { name: "GitHub", icon: <FaGithub />, link: "https://github.com" },
    ];

    return (
        <div id="about-me" className="flex flex-col items-center h-screen px-3 md:px-4 py-8">
            <h1 className="text-4xl md:text-7xl font-bold text-gray-800 mb-10 text-center">About Me</h1>

            {/* Grid layout for Education and About Content */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 w-full max-w-7xl mx-3 md:mx-auto mb-12">
                <div className="bg-gray-100 p-4 md:p-8 rounded-3xl shadow-lg border border-gray-300 flex flex-col items-center text-center">
                    <img
                        src="src/Assets/education.png"
                        className="w-[50px] h-[50px] mb-4"
                        alt="Education Icon"
                    />
                    <h3 className="font-bold text-xl md:text-2xl mb-4">Education</h3>
                    <p className="text-base md:text-lg mb-2">Bachelors in Computer Application (BCA)</p>
                    <p className="text-gray-600">Shivaji University, Kolhapur</p>
                </div>

                <div className="bg-gray-100 p-4 md:p-8 rounded-3xl shadow-lg border border-gray-300">
                    <p className="text-base md:text-lg leading-relaxed">
                        I'm Aditya, a passionate full-stack developer with a Bachelor's degree in Computer Applications. I specialize in creating dynamic and user-friendly applications using modern technologies like React.js, Node.js, and MongoDB. My projects reflect my commitment to delivering high-quality solutions that meet user needs. Explore my portfolio to see how I blend creativity and technical skills to bring ideas to life!
                    </p>
                </div>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col items-center text-center w-full px-3 md:px-6 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Contact Me</h2>

                <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto bg-white border border-gray-300 p-4 md:p-6 rounded-2xl shadow-lg">
                    {contactOptions.map((option, index) => (
                        <a
                            key={index}
                            href={option.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                        >
                            <span className="text-xl md:text-2xl">{option.icon}</span>
                            <span className="text-sm md:text-base font-medium text-gray-700">
                                {option.name}
                            </span>
                        </a>
                    ))}
                </div>

                <footer className="text-sm text-gray-600 m-7">
                    © 2024 Aditya Jagdale. All rights reserved.
                </footer>
            </div>
        </div>
    );
}

export default About;
