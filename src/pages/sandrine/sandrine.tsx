import React from "react";
import { ChartPoids } from "../../components/charts/chartPoids";
import data from "../../sandrine.json";
import "./sandrine.scss";
import { ChartImc } from "../../components/charts/chartImc";
import { Link } from "react-router-dom";


export default function Sandrine() {
	const dataSandrine = data.sandrine.poids;


	return (
		<section className="sandrine">
			<h1>Sandrine</h1>
			<Link to={"/"}>
				<i className="fa-solid fa-arrow-left"></i>
			</Link>
			<div className="wrapper">
				<div className="wrapper-charts">
					<ChartPoids
						data={dataSandrine}
						name="Sandrine"
						but={60}
						min={55}
						max={90}
					/>
					<ChartImc
						data={dataSandrine}
						taille={1.55}
						name="Sandrine"
						but={25}
						min={20}
						max={40}
					/>
				</div>
			</div>
		</section>
	);
}
