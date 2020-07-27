import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { dailyData } from "../api/api";

import "../styles.css"

export default function Chart({data: { confirmed, recovered, deaths, lastUpdate},country}) {
  const [mydailyData, setmydailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await dailyData();

      setmydailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)"
            ],
            data: [confirmed.value, recovered.value, deaths.value]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` }
      }}
    />
  ) : null;

  const lineChart = (
    mydailyData[0] ? (
      <Line
        data={{
          labels: mydailyData.map(({ date }) => date),
          datasets: [{
            data: mydailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: mydailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  return (
    <div className = 'chart'>
      {country ? barChart : lineChart}
    </div>
  );
}
