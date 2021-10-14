import React, { useEffect, useState } from "react";
import '../CSS/HeaderMobile.css';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import ViewListIcon from '@material-ui/icons/ViewList';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const HeaderMobile = ({ toggleMenu, setToggleMenu }) => {
  //fix the header
  const [fixedHeader, setFixHeader] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setFixHeader(true)
      }
      else {
        setFixHeader(false)
      }
      return () => window.removeEventListener("scroll", () => { })
    })
  }, [])

  return (
    <div className={fixedHeader && "mobile__positionedTop"}>
      <div className={toggleMenu ? "mobile" : "mobile__show"}>
        <div className={toggleMenu ? "mobile__logo" : "mobile__logo_fixed"}>
          <img
            className={toggleMenu ? "mobile__image" : "mobile__blueImage"}
            alt="not found"
            src={toggleMenu ? `/assets/logo2.jpeg` : `/assets/logo2.jpeg`}
          />
          <h6 className="mobile__bumu">Thinkx Cloud</h6>
        </div>
        <div className={toggleMenu ? "menu__hide" : "menu"}>
          <ul className="menu__ul">
            <li>
              <div className="mobile__icons">
                <HomeIcon />
                <Link to="/">Home</Link>

              </div>

            </li>
            <li>
              <div className="mobile__icons">
                <ViewListIcon />
                <Link to="/sharedhosting">Shared Hosting</Link>

              </div>

            </li>
            <li>
              <div className="mobile__icons">
                <ViewListIcon />
                <Link to="/vpshosting">VPS Hosting</Link>
              </div>

            </li>
            <li>
              <div className="mobile__icons">
                <ViewListIcon />
                <Link to="/ssl">SSL</Link>

              </div>

            </li>

            <li>
              <div className="mobile__icons">
                <AccountCircleIcon />
                <a href="https://thinkxcloud.com/billing/index.php?rp=/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  Login
                </a>
              </div>

            </li>
            <li>
              <div className="mobile__icons">
                <AccountCircleIcon fontSize="default" />
                <a href="https://thinkxcloud.com/billing/register.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  Register
                </a>

              </div>

            </li>
          </ul>
        </div>

        <div className={`mobile__toggle`}>

          <div className={toggleMenu ? "mobile__fixedRight" : "mobile__fixedLeft"}>

            {
              toggleMenu ?
                <IconButton
                  onClick={() => setToggleMenu(!toggleMenu)}
                  size="small">
                  <MenuIcon fontSize="large" className="menu__iconColor" />
                </IconButton>
                :
                <IconButton
                  onClick={() => setToggleMenu(!toggleMenu)}
                  size="small">
                  <CancelIcon
                    fontSize="large"
                  />
                </IconButton>
            }

          </div>
        </div>

      </div>
    </div>


  )

}
export default HeaderMobile