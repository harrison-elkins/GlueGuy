export default {
  margin: {
    top: 70,
    right: 60,
    bottom: 100,
    left: 70,
  },
  defs: [
    {
      id: "dots",
      type: "patternDots",
      background: "inherit",
      color: "#f5cb5c",
      size: 4,
      padding: 1,
      stagger: true,
    },
    {
      id: "lines",
      type: "patternLines",
      background: "inherit",
      color: "#eed312",
      rotation: -45,
      lineWidth: 6,
      spacing: 10,
    },
  ],
  fill: [
    {
      match: {
        id: "Cade Cunningham",
      },
      id: "dots",
    },
  ],
  axisBottom: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    fontSize: 15,
    legend: "Player Effeciency Rating (PER)",
    legendPosition: "middle",
    legendOffset: 50,
  },
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "",
    legendPosition: "middle",
    legendOffset: -40,
  },
};
