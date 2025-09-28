import * as React from "react";
import { Link } from "gatsby";

import "../styles/styles.css";

const IndexPage = () => {
	return (
		<div className="landing h-screen bg-[mistyrose]">
			<div className="flex flex-row min-h-[86vh]">
				<main className="w-full min-h-[86vh] flex flex-col">
					<div className="self-center justify-self-center my-auto px-4 mx-4">
						<h2>a.r.yang</h2>
						<p>
							hello, world!<br/>
							i'm audrey. welcome to my corner of the internet.
						</p>
						<div className="flex flex-row content-between">
							<p><a className="link" href="https://www.github.com/audrey-yang" 
								target="_blank" rel="noreferrer" title="GitHub">github</a></p>
							<p><a className="link" href="https://www.linkedin.com/in/audreyryang/" 
								target="_blank" rel="noreferrer" title="Linkedin">linkedin</a></p>
							<p><a className="link" href="https://blog.aryang.dev/" 
								target="_blank" rel="noreferrer" title="Blog">blog</a></p>
							<p><a className="link" href="https://bsky.app/profile/aryang.bsky.social" 
								target="_blank" rel="noreferrer" title="Bluesky">bsky</a></p>
							<p><a className="link" href="https://media.ebird.org/catalog?sort=obs_date_desc&userId=USER7850062&view=grid" 
								target="_blank" rel="noreferrer" title="Macaulay Library">photography</a></p>
						</div>
						<p><a className="link" href="mailto:me@aryang.dev" title="Email me">say hi!</a></p>
					</div>
				</main>
			</div>
		</div>
	);
};

export default IndexPage;
