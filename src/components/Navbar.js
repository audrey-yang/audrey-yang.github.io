import * as React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "gatsby";
import "../styles/styles.css";

const Navbar = () => {  
	return (
		<nav>
			<ul className="navbar">
				<li>
					<Link className="navbutton home" to="/">
						<FaHome size={23} />
					</Link>
				</li>
				<li><Link className="navbutton" to="/projects">Projects</Link></li>
				<li><Link className="navbutton" to="/">a.y.</Link></li>
			</ul>
		</nav>
	);
};

export default Navbar;