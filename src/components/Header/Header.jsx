import React from 'react';
import '../CSS/Header.css';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logoSection">
        <img
          className="header__logo"
          src="/assets/logo2.jpeg"

          alt="not found"
        />
        <div className="logo__content">
          <h3>Thinkx Cloud</h3>
          <p>Always here to deliver</p>
        </div>
      </div>
      <div className="header__right">
        <ul className="header__options">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sharedhosting">Shared Hosting</Link>
          </li>
          <li>
            <Link to="/vpshosting">VPS Hosting</Link>
          </li>
          <li>
            <Link to="/ssl">SSL</Link>
          </li>
          <li>
            <a href="https://thinkxcloud.com/billing/register.php"
              target="_blank"
              rel="noreferrer"
            >
              Domain
            </a>

          </li>
          <li>
            <a href="https://thinkxcloud.com/billing/index.php?rp=/login"
              target="_blank"
              rel="noreferrer"
            >
              Login
            </a>
          </li>
          <li>
            <a href="https://thinkxcloud.com/billing/register.php"
              target="_blank"
              rel="noreferrer"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>


  )
}
export default Header;