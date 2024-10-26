import React from "react";

const projects = [
    {
        title: "Backend Project",
        imageSrc: "src/Assets/backendproject.png",
        githubLink: "#",
    },
    {
        title: "Profile Management",
        imageSrc: "src/Assets/management.png",
        githubLink: "#",
    },
    {
        title: "Portfolio",
        imageSrc: "src/Assets/portfolio.png",
        githubLink: "#",
    }
];

function ProjectCard({ title, imageSrc, githubLink }) {
    return (
        <div className="bg-gray-100 rounded-3xl shadow-lg border border-gray-300 overflow-hidden flex flex-col items-center">
            <img
                className="w-[278px] h-[278px] object-cover "
                src={imageSrc}
                alt={title}
            />
            <div className="p-4 text-center">
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <a
                    href={githubLink}
                    className="inline-block bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                    Github
                </a>
            </div>
        </div>
    );
}

function Projects() {
    return (
        
        <div id="projects" className="flex flex-col min-h-screen mt-4  items-center h-auto px-3 md:px-4">
            <span className="text-lg mb-2 block">Explore My Recent Projects</span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-10">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-3 md:mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        imageSrc={project.imageSrc}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
