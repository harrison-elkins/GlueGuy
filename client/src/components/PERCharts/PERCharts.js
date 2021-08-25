import { ResponsiveBar } from "@nivo/bar";
import React from "react";

import data from "./PERChartsData";
import config from "./Config.js";

class PERChart extends React.Component {
  render() {
    const average = { id: "Group Average", "Group Average": 17.29 };
    return (
      <div class="chart">
        <ResponsiveBar
          data={[this.props.data, average]}
          keys={[this.props.data.id, average.id]}
          indexBy="id"
          margin={config.margin}
          padding={0.3}
          colors={{ scheme: "blues" }}
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
          theme={{
            background: "#5e60ce",
            textColor: "#fff",
            fontFamily: "Avenir",
            fontSize: 10,
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

export default PERChart;
