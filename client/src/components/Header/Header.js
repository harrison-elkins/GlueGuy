import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <h2 className="logo">LOGO</h2>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Players</a>
          </li>
          <li>
            <a href="#">Join</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
