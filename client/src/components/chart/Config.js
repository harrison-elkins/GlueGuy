export default {
  keys: [
    "Cade Cunningham",
    "Jalen Green",
    "Evan Mobley",
    "Scottie Barnes",
    "Jalen Suggs",
    "Jonathan Kuminga",
    "Franz Wagner",
    "Davion Mitchell",
    "Zaire Williams",
    "James Bouknight",
    "Joshua Primo",
    "Chris Duarte",
    "Moses Moody",
    "Corey Kispert",
  ],
  margin: {
    top: 50,
    right: 120,
    bottom: 50,
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
        id: "Cade Cunningham",
      },
      id: "dots",
    },
    {
      match: {
        id: "Evan Mobley",
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
