import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <h2 className="logo">GlueGuy</h2>
      </Link>
    </footer>
  );
}
