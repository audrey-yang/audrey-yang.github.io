import * as React from "react";
import { Link } from "gatsby";

import "../styles/styles.css";

const IndexPage = () => {
	return (
		<div className="landing h-screen bg-[mistyrose]">
			<div className="flex flex-row min-h-[86vh]">
				<main className="w-full min-h-[86vh] flex flex-col">
					<div className="self-center justify-self-center my-auto">
						<h2>a.r.yang</h2>
						<p>
							hello, world!<br/>
							i'm audrey. welcome to my corner of the internet.
						</p>
						<div className="flex flex-row content-between">
							<p><Link className="navbutton" to="/about">about me</Link></p>
							<p><Link className="navbutton" to="/projects">projects</Link></p>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default IndexPage;
