import React from "react"
import so_long from "../assets/so_long.gif"
import cub3d from "../assets/cub3d.gif"
import ft_irc from "../assets/ft_irc.gif"
import ft_transcendence from "../assets/login_transcendence.gif"

import "./Projects.css"


const Projects: React.FC = () => {
    const Projects = [
        {
            title: "Cute3D",
            description: "A 3D maze inspired by Wolfenstein 3D written in C",
            imageUrl: cub3d,
            link: "https://github.com/allihive/cub3d"
        },
        {
            title: "ft_irc",
            description: "An internet relay chat where you can create groups, set discussion topics and message individuals in different terminals.",
            imageUrl: ft_irc,
            link:"https://github.com/allihive/ft_irc"
        },
        {
            title: "So_Long Taylor's Version",
            description: "A 2D game inspired by PacMan where Taylor has to collect all her records. Written in C",
            imageUrl: so_long,
            link: "https://github.com/allihive/so_long"
        }
    ]
    const webDev = [
        {
            title: "ft_transcendence",
            description: "A full-stack project based on the Pong game where users can create tournaments, add friends, play against friends and chat!",
            imageUrl: ft_transcendence,
            link: "https://github.com/allihive/ft_transcendence"
        },
        {
            title: "My Portfolio",
            description: "See how I created my website with React, Vite, Typescript and Figma!",
            link: "https://github.com/allihive/allihive.github.io"
        }
    ]
    return (
        <section id="projects" className="projects">
            <div className="projects-content">
                <h2>Software/Web Development Projects</h2>
                <h3>Web Development</h3>
                <div className="project-grid">
                    {webDev.map((project, index) => (
                        <a key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card-link">
                        <div key={index} className="project-card">
                             <div className="project-card-content">
									<div className="card-text">
										<h3>{project.title}</h3>
										<p>{project.description}</p>
									</div>
									<div className="card-img">
										<img src={project.imageUrl} alt={project.title} />
									</div>
								</div>
                        </div>
                        </a>
                    ))}
                </div>
                <h3>C & C++</h3>
                <div className="project-grid">
                    {Projects.map((project, index) => (
                        <a key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card-link">
                        <div key={index} className="project-card">
                            <div className="project-card-content">
									<div className="card-text">
										<h3>{project.title}</h3>
										<p>{project.description}</p>
									</div>
									<div className="card-img">
										<img src={project.imageUrl} alt={project.title} />
									</div>
								</div>
                        </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects