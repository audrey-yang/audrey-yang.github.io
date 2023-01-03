import * as React from "react";
import "../styles/styles.css";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectLine = ({data}) => {  
	const { year, title, context, tech, website, src } = data;
	return (
		<tr key={title}>
			<td>{year}</td>
			<td className="font-bold">{title}</td>
			<td>{context}</td>
			<td className="hidden md:table-cell">{tech.join(" • ")}</td>
			<td>
				{src && <a href={src} target="_blank" rel="noreferrer" title="src">
					<FaGithub size={15} />
				</a>}
				{website && <a href={website} target="_blank" rel="noreferrer" title="website">
					<FaExternalLinkAlt size={15} />
				</a>}
			</td>
		</tr>
	);
  }

export default ProjectLine;