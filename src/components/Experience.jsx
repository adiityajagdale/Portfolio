import React from "react";

function Experience() {
    return (
        <div id="experience" className="flex justify-center min-h-screen  items-center h-auto px-3 md:px-4">
            <div className="text-center py-16 w-full md:max-w-4xl">
                <span className="text-lg mb-2 block">Explore My</span>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-10">Skills</h1>
                {/* Grid Layout for Frontend and Backend Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-3 md:mx-auto">
                    {/* Frontend Section */}
                    <div className="bg-gray-100 p-4  md:p-8 rounded-3xl shadow-lg border border-gray-300">
                        <h2 className="text-2xl font-bold mb-4">Frontend</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 list-none gap-y-4 p-2 md:p-3">
                            {['React.js', 'JavaScript', 'HTML/CSS', 'Java'].map((skill, index) => (
                                <li key={index} className="flex flex-col items-start p-2">
                                    <div className="flex items-center">
                                        <img src="src/Assets/copyverify.png" alt="Icon" className="w-5 h-5 mr-2" />
                                        <span className="text-lg">{skill}</span>
                                    </div>
                                    <span className="text-xs text-gray-600 mt-1 ml-7">Intermediate</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Backend Section */}
                    <div className="bg-gray-100 p-4 md:p-8 rounded-3xl shadow-lg border border-gray-300">
                        <h2 className="text-2xl font-bold mb-4">Backend</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 list-none gap-y-4 p-2 md:p-3">
                            {['SQL', 'MongoDB', 'Node.js', 'DSA', 'Git', 'GitHub'].map((skill, index) => (
                                <li key={index} className="flex flex-col items-start p-2">
                                    <div className="flex items-center">
                                        <img src="src/Assets/copyverify.png" alt="Icon" className="w-5 h-5 mr-2" />
                                        <span className="text-lg">{skill}</span>
                                    </div>
                                    <span className="text-xs text-gray-600 mt-1 ml-7">Beginner</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;