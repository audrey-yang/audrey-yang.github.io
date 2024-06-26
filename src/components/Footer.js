import * as React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/styles.css";

const Footer = () => {  
	return (
		<footer>
			<p>
				audrey r. yang
				<span className="hidden sm:inline"> •</span> <br className="inline sm:hidden" />
				from houston, with <span className="inline text-[#DB7093]">♥︎</span></p>
			<div className="footer-links">
				<a className="sidebar-link" href="https://www.github.com/audrey-yang" 
					target="_blank" rel="noreferrer" title="GitHub">
					<FaGithub size={26} />
				</a> 
				<a className="sidebar-link" href="https://www.linkedin.com/in/audreyryang" 
					target="_blank" rel="noreferrer" title="LinkedIn">
					<FaLinkedinIn size={26} />
				</a> 
				<a className="sidebar-link" href="mailto:auyang@seas.upenn.edu" 
					target="_blank" rel="noreferrer" title="Email">
					<FaEnvelope size={26} />
				</a> 
        	</div> 
		</footer> 
	);
  }

export default Footer;