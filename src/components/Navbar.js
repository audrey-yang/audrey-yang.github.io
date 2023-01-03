import * as React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "gatsby";
import "../styles/styles.css";

const Navbar = () => {  
	return (
		<nav>
			<ul className="navbar">
				<li>
					<a className="navbutton home" href="/">
						<FaHome size={23} />
					</a>
				</li>
				<li><Link className="navbutton" to="/projects">Projects</Link></li>
				<li><Link className="navbutton" href="/">a.y.</Link></li>
			</ul>
		</nav>
	);
};

export default Navbar;