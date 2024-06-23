import React from "react";
import ReactECharts from "echarts-for-react";

interface DataProps {
	date: string;
	poids: number;
}
interface ChartProps {
	data: DataProps[];
	name: string;
	but: number;
  min: number;
  max: number;
}

export function ChartPoids({ data, name, but, min, max }: ChartProps) {
	const datesArray = data.map((item) => {
		return item.date
});

	const poidsArray = data.map((item) => {
		return item.poids;
	});


	const option = {
		color: 'blue',
		title: {
			text: "Poids",
			textStyle: {
				color: 'blue'
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
				name: "poids",
				type: "line",
				smooth: true,
				data: poidsArray,
				markLine: {
					data: [
						{
							name: "poids objectif",
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
