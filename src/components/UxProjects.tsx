import React from "react"
import "./Projects.css"

const UxProjects: React.FC = () => {
	const Projects = [
		{
			title: "Access Map Plans: Final Project",
			description: "Designed an app for those who navigate the city with strollers",
			//imageUrl: Amp,
			link: "https://www.figma.com/proto/MGfBBJClwwdEjPb46A0eKo/Portfolio?node-id=20-12322&p=f&t=3C5dOLRYh4LAJy4L-8&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=12%3A12069&hotspot-hints=0&hide-ui=1"
		},
		{
			title: "Stockholm Water Technology: Cohesive UI",
			description: "Upgrading existing UI to a more cohesive design to create a striking website",
			//imageUrl: swt,
			link: "https://www.figma.com/proto/MGfBBJClwwdEjPb46A0eKo/Portfolio?node-id=12-12099&p=f&t=3C5dOLRYh4LAJy4L-8&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=12%3A12069&hotspot-hints=0&hide-ui=1"
		},
		{
			title: "ThingTesting: Conversion Rate",
			description: "Figuring how to convert casual users to active users on the platform with real data",
			//imageUrl: thingtesting,
			link: "https://www.figma.com/proto/MGfBBJClwwdEjPb46A0eKo/Portfolio?node-id=20-12378&p=f&t=3C5dOLRYh4LAJy4L-8&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=12%3A12069&hotspot-hints=0&hide-ui=1"
		}
	]

	return (
		<section id="uxProjects" className="projects">
		<div className="projects-content">
			<a 
				href="https://www.figma.com/proto/MGfBBJClwwdEjPb46A0eKo/Portfolio?node-id=12-12069&p=f&t=3C5dOLRYh4LAJy4L-8&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=12%3A12069&hotspot-hints=0&hide-ui=1"
				target="_blank"
				rel="noopener noreferrer">
				<h2>UX/UI Projects</h2>
			</a>
			<div className="project-grid">
				{Projects.map((project, index) => (
					<a 
						key={index}
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="project-card-link"
						>
							<div key={index} className="project-card">
							{/* <img src={project.imageUrl} alt={project.title} /> */}
                             <h3>{project.title}</h3>
                            <p>{project.description}</p>
							</div>
					</a>
				))}
			</div>
		</div>
		</section>
	)
}

export default UxProjects