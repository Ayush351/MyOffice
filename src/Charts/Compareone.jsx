import React from "react";
import { Bar } from "react-chartjs-2";

function Barchart() {
  const data = {
    labels: ["Estimated Time", "Time Taken"],
    datasets: [
      {
        label: "Days (days)",
        data: [45,50],
        borderColor: ["red","blue"],
        backgroundColor: ["rgba(255, 218, 119,0.6)","rgba(200, 218, 119,0.6)"],
      },
    ],
    
  };
  const options = {
    title: {
      display: true,
      text: "Time Comparison (days)",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 60,
            stepSize:20
          },
        },
      ],
    },
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}

export default Barchart;
