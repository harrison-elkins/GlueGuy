export default {
  keys: ["3P%", "PPS"],
  margin: {
    top: 100,
    right: 120,
    bottom: 150,
    left: 150,
  },
  defs: [
    {
      id: "dots",
      type: "patternDots",
      background: "inherit",
      color: "#38bcb2",
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
        id: "Jalen Green",
      },
      id: "dots",
    },
    {
      match: {
        id: "Davion Mitchell",
      },
      id: "lines",
    },
  ],
  axisTop: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 90,
    legend: "Points Per Shot & 3 Point%",
    legendPosition: "middle",
    legendOffset: 16,
  },
  axisBottom: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 90,
    legend: "",
    legendPosition: "middle",
    legendOffset: 32,
  },
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "",
    legendPosition: "middle",
    legendOffset: -40,
  },
  legends: [
    {
      dataFrom: "keys",
      anchor: "bottom-right",
      direction: "column",
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: "left-to-right",
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [
        {
          on: "hover",
          style: {
            itemOpacity: 1,
          },
        },
      ],
    },
  ],
};
