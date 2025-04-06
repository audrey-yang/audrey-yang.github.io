import * as React from "react";
import { graphql } from "gatsby";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ExperienceTabs from "../components/ExperienceTabs";
import Summary from "../../content/summary.mdx";
import Contact from "../../content/contact.mdx";

import "../styles/styles.css";

const AboutPage = () => {
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
						<Summary />
						<h3>Experience</h3>
						<ExperienceTabs />
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

export default AboutPage;
