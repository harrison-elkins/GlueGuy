import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

const DynamicLine = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          label: "level of baller",
          data: [32, 55, 40, 65, 31],
          fill: true,
          backgroundColor: "rgba(3, 4, 94, .5)",
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <h1>Dynamic Line Chart</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Baller Scale", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoskip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default DynamicLine;
