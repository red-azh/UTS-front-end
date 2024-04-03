/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<ul>
				<li>
					<NavLink to={"/"} style={{ color: "white" }}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to={"/popular"} style={{ color: "white" }}>
						{" "}
						Populer
					</NavLink>
				</li>
				<li>
					<NavLink to={"/search"} style={{ color: "white" }}>
						{" "}
						Search
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
