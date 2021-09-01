import { ResponsivePie } from "@nivo/pie";
import data from "./ResponsivePieData";
import "./ResponsivePie.scss";

const ResponsivePieChart = () => (
  <div className="pieChart">
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      colors={{ scheme: "set3" }}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#fff"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor="#fff"
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#242423"
      tooltip={({ datum: { id, value, color } }) => (
        <div
          style={{
            padding: 12,
            color,
            background: "#222222",
          }}
        >
          <span>ASSIST%</span>
          <br />
          <strong>
            {id}: {value}
          </strong>
        </div>
      )}
      theme={{
        tooltip: {
          container: {
            background: "#333",
          },
        },
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "Jalen Green",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "Jalen Suggs",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      theme={{
        background: "#242423",
        textColor: "#242423",
        fontSize: 15,
        fontFamily: "Futura",
        axis: {
          domain: {
            line: {
              stroke: "#777777",
              strokeWidth: 0,
            },
          },
          ticks: {
            line: {
              stroke: "#777777",
              strokeWidth: 0,
            },
          },
        },
        grid: {
          line: {
            stroke: "#fff",
            strokeWidth: 1,
          },
        },
      }}
      legendLabel={(datum) => `${datum.id} (${datum.value})`}
      legends={[
        {
          dataFrom: "keys",
          toggleSerie: true,
          anchor: "bottom-left",
          direction: "column",
          justify: false,
          translateX: -40,
          translateY: 56,
          itemsSpacing: 10,
          itemWidth: 100,
          itemHeight: 15,
          itemTextColor: "#fff",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 15,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#ffe66d",
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default ResponsivePieChart;
