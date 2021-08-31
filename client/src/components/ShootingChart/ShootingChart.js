import { ResponsiveBar } from "@nivo/bar";
import React from "react";

import "./ShootingChart.scss";
import data from "./ShootingChartData.js";
import config from "./Config.js";

class ShootingChart extends React.Component {
  render() {
    return (
      <div class="chart">
        <ResponsiveBar
          data={data}
          keys={config.keys}
          indexBy="player"
          margin={config.margin}
          padding={0.3}
          colors={{ scheme: "nivo" }}
          colorBy="id"
          defs={config.defs}
          fill={config.fill}
          borderColor="inherit:darker(1.6)"
          axisTop={null}
          axisRight={null}
          axisBottom={config.axisBottom}
          axisLeft={config.axisLeft}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="inherit:darker(1.6)"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={config.legends}
          tooltip={({ id, value, color }) => (
            <div
              style={{
                padding: 12,
                color,
                background: "#222222",
              }}
            >
              <strong>
                {id}: {value}
              </strong>
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
        />
      </div>
    );
  }
}

export default ShootingChart;
