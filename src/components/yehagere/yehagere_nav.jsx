import logoImg from "../../images/YH-web-_-homepage_logo.png";
import Icons from "../navbar/icons";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ToggleButton from './toggle_button'
const YehagereNav = () => {
  const location = useLocation();
  const route = location.pathname;
  const mobileView = useMediaQuery({ query: "(max-width: 576px)" });
  return (
    <div className="yehagere-nav">
      <div className="top">
        <Link to="/">
          {" "}
          <div className="logo">
            <img src={logoImg} alt="" />
          </div>
        </Link>

        <div className="right">
          {mobileView ? (
            <>
              <ToggleButton />
            </>
          ) : (
            <>
              <div className="links">
                <Link to="/products" style={{ color: "white" }}>
                  <div className="link-item">Shop</div>
                </Link>
                <Link to="/" style={{ color: "white" }}>
                  {" "}
                  <div className="link-item">Story</div>
                </Link>
              </div>
              <Icons />
            </>
          )}
        </div>
      </div>
      {route === "/" && (
        <div className="center">
          <div className="center-inner">
            {" "}
            <h3>Made with lots of hearts and souls</h3>
            <p>Eco friendly.cruelty free.ethically made</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default YehagereNav;
