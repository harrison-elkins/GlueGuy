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
          nodeSize={18}
          animate={true}
          motionConfig="wobbly"
          isInteractive={true}
          itemOpactity={1}
          theme={{
            background: "#5e60ce",
            textColor: "#fff",
            fontSize: 15,
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
          margin={{ top: 100, right: 90, bottom: 100, left: 90 }}
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
