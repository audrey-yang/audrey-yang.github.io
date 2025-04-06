import * as React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ExperienceTabs from "../components/ExperienceTabs";
import Summary from "../../content/summary.mdx";
import Education from "../../content/education.mdx";
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
						<h3>Education</h3>
						<Education />
						<Contact />
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default AboutPage;
