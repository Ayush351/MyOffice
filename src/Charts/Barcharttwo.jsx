import React from "react";
import { Bar } from "react-chartjs-2";

function Barchart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May" ,"June", "July", "August"],
    datasets: [
      {
        label: "Engagement Score for 2020",
        data: [10, 18, 7, 20, 20, 28, 16, 14],
        borderColor: ["red","red","red","red","red","red","red","red"],
        backgroundColor: ["rgba(255, 218, 119,0.6)","rgba(255, 218, 119,0.6)","rgba(255, 218, 119,0.6)","rgba(255, 218, 119,0.6)","rgba(255, 218, 119,0.6)","rgba(255, 218, 119,0.6)","rgba(255, 218, 119,0.6)","rgba(255, 218, 119,0.6)"],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Bar Chart for Engagement Score",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
            stepSize:10
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
