/** @format */

import React from "react";
import "./Hero.css";

const Hero = (props) => {
	const { name, description, birth_year, death_year } = props;

	return (
		<div className="hero">
			<h3 class="nama">{name}</h3>
			<p className="tgl_lahir">
				<small>lahir : {birth_year}</small>
			</p>
			<p className="tgl_meninggal">
				<small>meniggal: {death_year}</small>
			</p>
			<hr />
			<p>Deskripsi:</p>
			<p className="description">{description}</p>
		</div>
	);
};

export default Hero;
