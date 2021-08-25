import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h2 className="logo">GLUE-GUY</h2>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="/signup">
              Join
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/join">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
