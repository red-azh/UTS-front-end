/** @format */

import React from "react";
import "./Search.css";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero.js";
import { allHero } from "../../api.js";
import { searchMovie } from "../../api.js";
const Search = () => {
	// card
	const [hero, setHero] = useState([]);
	useEffect(() => {
		allHero().then((result) => {
			setHero(result);
		});
	}, []);
	console.log(hero);

	// search
	const search = async (q) => {

			const query = await searchMovie(q);
			setHero(query);
			console.log({ query: query });
	
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Cari Pahlawan berdasarkan nama..."
				className="search"
				onChange={({ target }) => search(target.value)}
			/>
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

export default Search;
