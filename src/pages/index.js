import * as React from "react";
import { Link, graphql } from "gatsby";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ExperienceTabs from "../components/ExperienceTabs";
import ProjectCard from "../components/ProjectCard";
import Intro from "../../content/intro.mdx";
import About from "../../content/about.mdx";
import Contact from "../../content/contact.mdx";
import Me from "../images/me.jpeg";

import "../styles/styles.css";

const IndexPage = ({ data }) => {
	const projectsList = data.allHighlightProjectsJson.nodes.map((node) => 
		<ProjectCard data={node} />
	);
	return (
		<div className="h-screen">
			<Navbar />
			<div className="flex flex-row min-h-[86vh]">
				<Sidebar />
				<main className="text-center w-full">
					<div>
						<h1>Audrey Yang</h1>
						<h4>['ɔ.d͡ʒɹi 'jɑŋ]</h4>
					</div>
					<div className="content">
						<div className="flex flex-row items-center">
							<div className="flex-col px-4">
								<Intro />
							</div>
							<img src={Me} className="min-width-[12rem] w-2/6 rounded-[50%] pt-6 pl-2" />
						</div>
						<About />
						<h3>Experience</h3>
						<ExperienceTabs />
						<h3>Some things I've built</h3>
						<div className="highlight-projects">{projectsList}</div>
						<p>Check out some of my past projects <Link to="/projects">here</Link>.</p>
						<Contact />
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
};

export const query = graphql`query {
	allHighlightProjectsJson {
		nodes {
			context
			description
			src
			tech
			title
			website
			year
			image {
				src {
					publicURL
				}
			}
		}
	}
}
`;

export default IndexPage;
