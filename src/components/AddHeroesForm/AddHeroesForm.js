/** @format */

import React, { useState } from "react";
import "./AddHeroesForm.css";

const AddHeroesForm = ({ onAddHero }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		birth_year: "",
		death_year: "",
	});
	// name, description, birth_year, death_year
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		onAddHero(formData);
	};

	return (
		<div className="container">
			<section className="form">
				<h1 className="from-title">Tambah Pahlawan</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-inputgroup">
						<label htmlFor="name" className="from-label">
							Nama
						</label>
						<br />
						<input
							type="text"
							name="name"
							id="name"
							className="form-input"
							onChange={handleChange}
						/>
					</div>
					<div className="form-inputgroup">
						<label htmlFor="birth_year" className="from-label">
							Tahun Lahir
						</label>
						<br />
						<input
							type="number"
							name="birth_year"
							id="birth_year"
							className="form-input"
							onChange={handleChange}
						/>
					</div>

					<div className="form-inputgroup">
						<label htmlFor="death_year" className="from-label">
							Tahun Meninggal
						</label>
						<br />
						<input
							type="text"
							name="death_year"
							id="death_year"
							className="form-input"
							onChange={handleChange}
						/>
					</div>
					<div className="form-inputgroup">
						<label htmlFor="description" className="from-label">
							Deskripsi
						</label>
						<br />
						<textarea
							name="description"
							id="description"
							cols="27"
							rows="10"
							onChange={handleChange}></textarea>
					</div>
					<button className="form-button">Tambah</button>
				</form>
			</section>
		</div>
	);
};

export default AddHeroesForm;
