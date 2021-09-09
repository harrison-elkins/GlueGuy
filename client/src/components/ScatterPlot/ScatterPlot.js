import { Component } from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import data from "./ScatterData";
import "./ScatterPlot.scss";

class ScatterPlot extends Component {
  render() {
    return (
      <div class="scatterplot">
        <ResponsiveScatterPlot
          data={data}
          colors={{ scheme: "set3" }}
          nodeSize={{
            key: "x",
            values: [10, 40],
            sizes: [15, 30],
          }}
          animate={true}
          motionConfig="wobbly"
          isInteractive={true}
          itemOpactity={1}
          annotations={[
            {
              type: "circle",
              match: { key: { x: [35], y: [50] } },
              noteX: 25,
              noteY: 25,
              offset: 3,
              noteTextOffset: -3,
              noteWidth: 5,
              note: "an annotation",
              size: 40,
            },
          ]}
          tooltip={({ node }) => (
            <div
              style={{
                color: node.style.color,
                background: "#333",
                padding: "16px 18px",
              }}
            >
              <strong>{node.id}</strong>
              <br />
              {`x: ${node.data.formattedX}`}
              <br />
              {`y: ${node.data.formattedY}`}
            </div>
          )}
          theme={{
            background: "#242423",
            textColor: "#fff",
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
          margin={{ top: 150, right: 150, bottom: 150, left: 150 }}
          xScale={{ type: "linear", min: 0, max: "auto" }}
          xFormat={function (e) {
            return e + " AST%";
          }}
          yScale={{ type: "linear", min: 0, max: 70 }}
          yFormat={function (e) {
            return e + " eFG%";
          }}
          blendMode="normal"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "AST%",
            legendPosition: "middle",
            legendOffset: 46,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            fontSize: 15,
            legend: "eFG%",
            legendPosition: "middle",
            legendOffset: -60,
          }}
        />
      </div>
    );
  }
}

export default ScatterPlot;
