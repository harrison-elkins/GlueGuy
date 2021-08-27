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
          keys={[
            "Cade Cunningham",
            "Jalen Green",
            "Evan Mobley",
            "Scottie Barnes",
            "Jalen Suggs",
          ]}
          indexBy="stat"
          maxValue="auto"
          margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
          curve="linearClosed"
          borderWidth={2}
          borderColor={{ from: "color" }}
          gridLevels={3}
          gridShape="linear"
          gridLabelOffset={36}
          enableDots={true}
          dotSize={15}
          dotColor={{ theme: "background" }}
          dotBorderWidth={2}
          dotBorderColor={{ from: "color" }}
          enableDotLabel={true}
          dotLabel="value"
          dotLabelYOffset={-12}
          colors={{ scheme: "nivo" }}
          fillOpacity={0.8}
          blendMode="multiply"
          animate={true}
          motionConfig="wobbly"
          isInteractive={true}
          theme={{
            background: "#242423",
            textColor: "#fff",
            fontFamily: "Futura",
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
        />
      </div>
    );
  }
}

export default Radar;
