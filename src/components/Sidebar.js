import * as React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { TfiAngleDoubleUp, TfiAngleDoubleDown } from "react-icons/tfi";
import "../styles/styles.css";

const Sidebar = () => {  
	return (
		<div className="sidebar">
			<TfiAngleDoubleUp size={36} className="py-2 text-gray-400" />
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
			<TfiAngleDoubleDown size={36} className="py-2 text-gray-400" />
        </div> 
	);
  }

export default Sidebar;