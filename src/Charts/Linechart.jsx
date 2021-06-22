import React from "react";
import { Line } from "react-chartjs-2";

function Linechart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May" ,"June", "July", "August"],
    datasets: [
      {
        label: "Performance Ratio for 2020",
        data: [1, 1, 0.66, 0.75, 0.77, 0.56, 1, 0.8],
        borderColor: ["#f5b461"],
        backgroundColor: ["rgba(255,165,165,0.3)"],
        pointBackgroundColor: ["#fecd1a","#fecd1a","#fecd1a","#fecd1a","#fecd1a","#fecd1a","#fecd1a","#fecd1a"],
        pointBorderColor: ["#ec5858","#ec5858","#ec5858","#ec5858","#ec5858","#ec5858","#ec5858","#ec5858"],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Line Chart for Performance Ratio",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 1,
            stepSize:1
          },
        },
      ],
    },
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}

export default Linechart;
