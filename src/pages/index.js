import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import "../styles/styles.css";

const IndexPage = ({ data }) => {  
	return (
		<div className="h-screen">
			<Navbar />
			<div className="flex flex-row min-h-[86vh]">
				<Sidebar />
				<main className="h-full">
					<div>
						<h1>Audrey Yang</h1>
						<h4>['ɔ.d͡ʒɹi 'jɑŋ]</h4>
					</div>
					{data.allMdx.nodes[0].body}
				</main>
			</div>
			<Footer />
		</div>
	);
}

export const query = graphql`
	query {
		allMdx {
			nodes {
				body
			}
		}
	}
`;

export default IndexPage;
