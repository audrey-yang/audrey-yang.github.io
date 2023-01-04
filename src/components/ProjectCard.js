import * as React from "react";
import "../styles/styles.css";

const ProjectLine = ({data}) => {  
	const {title, context, tech, website, src, description, image } = data;
	return (
		<div key={title} className="project-card">
			{ (src || website) && 
				<a href={src ?? website} target="_blank" rel="noreferrer" title="src">
					<img src={image.src.publicURL} />
				</a>
			} 
			{ !(src || website) && <img src={image.src.publicURL} /> } 
			<div>
			<h4>{title}</h4>
				<h5>{context}</h5>
				<p className="hidden sm:flex">{description}</p>
				<p className="text-gray-500">{tech.join(" • ")}</p>
			</div>
		</div>
	);
  }

export default ProjectLine;