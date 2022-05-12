import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { Logo } from '../../../media/exportMedia'

function Footer(props) {
  return (
    <footer className="footer-container">
      <div className="footer-flex">
        <div className="footer-1-flex">
          <Link to="/">
            <Logo/>
          </Link>
          <span className="copyright">
            © 2022 Wheelprint, All rights reserved
          </span>
        </div>

        <div className="footer-2-flex">
          <div>
            <p>Menu</p>
            <Link to="/">Home</Link>
            <Link to="/beaches">Beaches</Link>
            <Link to="/info">Info</Link>
          </div>
          <div className="social-grid">
            <p>Find us</p>
            <a href="https://github.com/WildCodeSchool/2022-03-JS-Lisbon-hackathon-1-Green-House/tree/develop/green-house/frontend" target="blank">
              Github
            </a>
            <a href="https://github.com/WildCodeSchool/2022-03-JS-Lisbon-hackathon-1-Green-House/tree/develop/green-house/frontend" target="blank">
              Linkedin
            </a>
          </div>
        </div>

        <div className="footer-3-flex">
          <div className="social-grid">
            <p>Find us</p>
            <div className="social-icons-grid"></div>
          </div>
        </div>

        <span className="copyright-mobile">
          © 2022 Wheelprint, All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
