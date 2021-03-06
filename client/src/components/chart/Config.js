export default {
  keys: ["PPG", "FG%"],
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
        player: "Jalen Green",
      },
      id: "dots",
    },
    {
      match: {
        player: "Davion Mitchell",
      },
      id: "lines",
    },
  ],
  axisBottom: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
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
      itemsSpacing: 5,
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
