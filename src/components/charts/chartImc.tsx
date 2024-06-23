import React from "react";
import ReactECharts from "echarts-for-react";

interface DataProps {
	date: string;
	poids: number;
}
interface ChartProps {
	data: DataProps[];
	name: string;
	taille: number;
	but: number;
  min: number;
  max: number;
}

export function ChartImc({ data, name, taille, but, min, max }: ChartProps) {

	const datesArray = data.map((item) => {
    return item.date
	});


	const IMCArray = data.map((item) => {
		return item.poids / (taille * taille);
	});

	const option = {
    color: 'green',
		title: {
			text: "IMC",
      textStyle: {
        color: 'green'
      }
		},
		tooltip: {
			trigger: "axis",
		},
		legend: {
      show: false,
		},
		grid: {
			left: "3%",
			right: "4%",
			bottom: "3%",
			containLabel: true,
		},
		toolbox: {
			feature: {
				saveAsImage: {},
			},
		},
		xAxis: {
			type: "category",
			boundaryGap: false,
			data: datesArray,
		},
		yAxis: {
      type: "value",
      min: min,
			max: max,
		},
		series: [
			{
				name: "IMC",
				type: "line",
				smooth: true,
				data: IMCArray,
        markLine: {
          data: [
						{
							name: "IMC objectif",
							yAxis: but,
						},
					],
				},

			},
		],
	};

	return (
		<div className="chart">
			<ReactECharts option={option} style={{ height: "100%" }} />
		</div>
	);
}
