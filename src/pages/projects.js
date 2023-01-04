import * as React from "react";
import { graphql } from "gatsby";

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ProjectLine from '../components/ProjectLine';

import "../styles/styles.css";

const ProjectsPage = ({ data }) => {
	const projectsList = data.allProjectsJson.nodes.map((node) => 
		<ProjectLine data={node} />
	);
	return (
		<div className="h-screen">
			<Navbar />
			<div className="flex flex-row min-h-[86vh]">
				<Sidebar />
				<main className="text-center w-full">
					<div>
						<h1>My Projects</h1>
					</div>
					<table className="projects-table">
						<thead>
							<tr>
								<th>Year</th>
								<th className="w-96">Title</th>
								<th>Made for</th>
								<th className="hidden md:table-cell">Built with</th>
								<th>Links</th>
							</tr>
						</thead>
						<tbody>
							{projectsList}
						</tbody>
					</table>
				</main>
			</div>
			<Footer />
		</div>
	);
}

export const query = graphql`query {
	allProjectsJson {
		nodes {
			context
			description
			src
			tech
			title
			website
			year
		}
	}
}
`;

export default ProjectsPage;