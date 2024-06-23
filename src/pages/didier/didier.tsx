import React from "react";
import { Link } from "react-router-dom";
import { ChartImc } from "../../components/charts/chartImc";
import { ChartPoids } from "../../components/charts/chartPoids";
import data from "../../didier.json";
import "./didier.scss";



export default function Didier() {
	const dataDidier = data.didier.poids;


	return (
		<section className="didier">
			<h1>Didier</h1>
			<Link to={"/"}>
				<i className="fa-solid fa-arrow-left"></i>
			</Link>
			<div className="wrapper">
				<div className="wrapper-charts">
					<ChartPoids
						data={dataDidier}
						name="Didier"
						but={74}
						min={70}
						max={80}
					/>
					<ChartImc
						data={dataDidier}
						taille={1.71}
						name="Didier"
						but={25}
						min={20}
						max={40}
					/>
				</div>
			</div>
		</section>
	);
}
