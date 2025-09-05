import React from "react"
import "./Projects.css"

const Projects: React.FC = () => {
    const Projects = [
        {
            title: "Cute3D",
            description: "A 3D maze inspired by Wolfenstein 3D written in C",
            // imageUrl: cube3d
        },
        {
            title: "ft_irc",
            description: "An internet relay chat where you can create groups, set discussion topics and message individuals in different terminals."
            // imageUrl: ft_irc
        },
        {
            title: "So_Long Taylor's Version",
            description: "A 2D game inspired by PacMan where Taylor has to collect all her records. Written in C"
            // imageUrl: so_long
        }
    ]
    const webDev = [
        {
            title: "ft_transcendence",
            description: "A full-stack project based on the Pong game where users can create tournaments, add friends, play against friends and chat!"
            // imageUrl: ft_transcendence
        },
    ]
    return (
        <section id="projects" className="projects">
            <div className="projects-content">
                <h2>My Projects</h2>
                <h3>Web Development</h3>
                <div className="project-grid">
                    {webDev.map((project, index) => (
                        <div key={index} className="project-card">
                             {/* <img src={project.imageUrl} alt={project.title} /> */}
                             <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
                <h3>C & C++</h3>
                <div className="project-grid">
                    {Projects.map((project, index) => (
                        <div key={index} className="project-card">
                            {/* <img src={project.imageUrl} alt={project.title} /> */}
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects