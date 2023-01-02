import * as React from "react";
import { FaHome } from "react-icons/fa";
import "../styles/styles.css";

const Navbar = () => {  
	return (
		<nav>
			<ul className="navbar">
				<li>
					<a className="navbutton home" href="/">
						<FaHome size={21} />
					</a>
				</li>
				<li><a className="navbutton" href="/projects">Projects</a></li>
				<li><a className="navbutton" href="/">a.y.</a></li>
			</ul>
		</nav>
	);
};

export default Navbar;