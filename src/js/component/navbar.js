import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Agenda</span>
			</Link>
			<div className="ml-auto">
				<Link to="/single">
					<button className="btn btn-primary">Add contact</button>
				</Link>
			</div>
		</nav>
	);
};
