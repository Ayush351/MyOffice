import React from "react";
import { Line } from "react-chartjs-2";

function Lineproone() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May" ,"June", "July", "August", "Sep"],
    datasets: [
      {
        label: "Project Progress (%)",
        data: [15, 30, 40, 48, 60, 72,80, 92, 100],
        borderColor: ["#f5b461"],
        backgroundColor: ["rgba(255,165,165,0.3)"],
        pointBackgroundColor: ["#fecd1a","#fecd1a","#fecd1a","#fecd1a","#fecd1a","#fecd1a","#fecd1a","#fecd1a","#fecd1a"],
        pointBorderColor: ["#ec5858","#ec5858","#ec5858","#ec5858","#ec5858","#ec5858","#ec5858","#ec5858","#ec5858"],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Line Chart for Project Progress",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            stepSize:20
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

export default Lineproone;
