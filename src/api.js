/** @format */

import axios from "axios";
// const baseUrl = "https://indonesia-public-static-api.vercel.app";
export const allHero = async () => {
	const hero = await axios.get(
		`https://indonesia-public-static-api.vercel.app/api/heroes`
	);
	return hero.data;
};

export const searchMovie = async (q) => {
	const search = await axios.get(
		`https://indonesia-public-static-api.vercel.app/api/heroes?name=${q}`
	);
	return search.data;
};
// export const allHero = async () => {
// 	const url = "https://indonesia-public-static-api.vercel.app/api/heroes";

// 	try {
// 		const hero = await axios.get(url);
// 		return hero.data.data;
// 	} catch (error) {
// 		console.error("Error fetching pahlawan list:", error);
// 	}
// };
