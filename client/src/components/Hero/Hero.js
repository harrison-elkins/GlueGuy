import React from "react";
import ShootingChart from "../ShootingChart/ShootingChart";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <article className="hero__container">
        <div className="hero__dets">
          <h1 className="hero__title">GlueGuy</h1>
          <p className="hero__desc">
            Leveraging <span className="data">data</span> to bring fans closer
            to the players and game they love.
          </p>
        </div>
        <div className="hero__chart">
          <ShootingChart />
        </div>
      </article>
    </section>
  );
}
