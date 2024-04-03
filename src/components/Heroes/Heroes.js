/** @format */

import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero.js";
import { allHero } from "../../api.js";
import "./Heroes.css";
import AddHeroesForm from "../AddHeroesForm/AddHeroesForm.js";

const Heroes = () => {
	// LOOPING API
	const [hero, setHero] = useState([]);
	useEffect(() => {
		allHero().then((result) => {
			setHero(result);
		});
	}, []);
	
	// tambah data
	const addHero = (datas) => {
		setHero([...hero, datas]);
	};

	console.log(hero);
	return (
		<div>
			<h1>Pahlawan Indonesia</h1>
			<AddHeroesForm onAddHero={addHero} />
			<div class="pahlawan-container">
				{hero.map((data) => {
					return (
						<Hero
							name={data.name}
							birth_year={data.birth_year}
							death_year={data.death_year}
							description={data.description}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Heroes;
