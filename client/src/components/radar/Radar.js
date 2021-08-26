import { Component } from "react";
import { ResponsiveRadar } from "@nivo/radar";
import "./Radar.scss";
import data from "./RadarData";

class Radar extends Component {
  render() {
    return (
      <div class="radar">
        <ResponsiveRadar
          data={data}
          keys={["Cade Cunningham"]}
          indexBy="stat"
          maxValue="80"
          margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
          curve="linearClosed"
          borderWidth={2}
          borderColor={{ from: "color" }}
          gridLevels={3}
          gridShape="circular"
          gridLabelOffset={36}
          enableDots={true}
          dotSize={10}
          dotColor={{ theme: "background" }}
          dotBorderWidth={2}
          dotBorderColor={{ from: "color" }}
          enableDotLabel={true}
          dotLabel="value"
          dotLabelYOffset={-12}
          colors={{ scheme: "paired" }}
          fillOpacity={0.5}
          blendMode="multiply"
          animate={true}
          motionConfig="wobbly"
          isInteractive={true}
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

export default Radar;
