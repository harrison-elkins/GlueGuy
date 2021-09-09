import React from "react";
import "./Glossary.scss";

function Glossary() {
  window.scroll(0, 0);
  return (
    <main className="ref-container">
      <h1 className="ref-head">GLOSSARY</h1>
      <section className="ref">
        <article className="ref__formulas">
          <h2 className="ref__sub-head">Definitions & Formulas</h2>
          <div className="ref__formula">
            <h4 className="ref__formula-head">True Shooting Percentage</h4>
            <p className="ref__desc">
              A measurement of efficiency as a shooter in field goal attempts,
              three-point field goal attempts and free throws.
            </p>
            <h3 className="ref__formula-body">
              TS% = (PTS * 50) / [(FGA + 0.44 * FTA)]
            </h3>
          </div>
          <div className="ref__formula">
            <h4 className="ref__formula-head">
              Effective Field Goal Percentage
            </h4>
            <p className="ref__desc">
              A measurement of efficiency as a shooter in all field goal
              attempts with three-point attempts weighted fairly.
            </p>
            <h3 className="ref__formula-body">eFG% = (FG + 0.5 * 3P) / FGA</h3>
          </div>
          <div className="ref__formula">
            <h4 className="ref__formula-head">Total Rebound Percentage</h4>
            <p className="ref__desc">
              A measurement of the percentage of both offensive and defensive
              rebounds a player secures that are available to his team.
            </p>
            <h3 className="ref__formula-body">
              TRB% = 100 * [Total Player Rebounds * (Team Minutes / 5)] /
              [Player Minutes * (Team Total Rebounds + Opponent Total Rebounds)]
            </h3>
          </div>
          <div className="ref__formula">
            <h4 className="ref__formula-head">Assist Percentage</h4>
            <p className="ref__desc">
              A measurement of the percentage of assists a player records in
              relation to the team's overall total while he is in the game.
            </p>
            <h3 className="ref__formula-body">
              AST% = 100 * Player ASTs / [((Player Minutes / (Team Minutes
              Played / 5)) * Team FGs) – Player FGs]
            </h3>
          </div>
          <div className="ref__formula">
            <h4 className="ref__formula-head">Usage Percentage</h4>
            <p className="ref__desc">
              A measurement of the percentage of plays utilized by a player
              while he is in the game.
            </p>
            <h3 className="ref__formula-body">
              USG% = 100 * [(FGA + 0.44 * FTA + TOV) * (Team Minutes / 5)] /
              [Player Minutes * Team FGA + 0.44 * Team FTA + Team TOV[]
            </h3>
          </div>
          <div className="ref__formula">
            <h4 className="ref__formula-head">Total Shooting Percentage</h4>
            <p className="ref__desc">
              The sum of a player's field goal, free throw and three-point
              percentage.
            </p>
            <h3 className="ref__formula-body">
              Total S% = (FG%) + (FT%) + (3P%)
            </h3>
          </div>
          <div className="ref__formula">
            <h4 className="ref__formula-head">Offensive Rating</h4>
            <h3 className="ref__formula-body">
              ORtg = The number of points a player produces per 100 possessions.
            </h3>
            <p className="ref__formula-credits">Created by Dean Oliver</p>
          </div>
          <div className="ref__formula">
            <h4 className="ref__formula-head">Defensive Rating</h4>
            <h3 className="ref__formula-body">
              DRtg = The number of points a player allows per 100 possessions
            </h3>
            <p className="ref__formula-credits">Created by Dean Oliver</p>
          </div>
          <div className="ref__formula">
            <h4 className="ref__formula-head">Points Per Shot</h4>
            <h3 className="ref__formula-body">
              PPS = Points Scored Per Field Goal Attempt
            </h3>
          </div>
          <div className="ref__formula">
            <h4 className="ref__formula-head">Pure Point Rating</h4>
            <p className="ref__desc">
              A single numeric representation of a player's ability to handle
              the ball and create positive shot opportunities for their
              teammates.
            </p>
            <h3 className="ref__formula-body">
              PPR = 100 x (League Pace / Team Pace) x ([(Assists x 2/3) -
              Turnovers] / Minutes)
            </h3>
          </div>
          {/* <div className="ref__formula">
            <h4 className="ref__formula-head">Player Efficiency Rating</h4>
            <h3 className="ref__formula-body">
              The number of points a player allows per 100 possessions
            </h3>
            <p className="ref__formula-credits">Created John Hollinger</p>
          </div> */}
        </article>
      </section>
    </main>
  );
}

export default Glossary;
