import Logo from "./logo";
import Nav from "./nav";
import Icons from "./icons";
import { useMediaQuery } from "react-responsive";
import ToggleButton from "./toggle_button";
import { useEffect } from "react";
import { navbarSlice } from "../../slices/navbar";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
const Navbar = () => {
  const showButtomNav = useMediaQuery({ query: "(max-width: 576px)" });
  const showNav = useMediaQuery({ query: "(min-width: 1100px)" });
  const navbarActions = navbarSlice.actions;
  const location = useLocation()
  const dispatch = useDispatch();
  const stickNavbar = useSelector(state => state.navbar.stickNavbar)
  const handleScroll = () => {
    if(window.pageYOffset >=100) {
      dispatch(navbarActions.setStickNavbar(true))
    }
    else {
      dispatch(navbarActions.setStickNavbar(false))
    }
   
  }
  window.addEventListener("scroll", handleScroll);
  if(showButtomNav) {
    document.body.style.marginTop = '72px'
  }
  else {
    document.body.style.marginTop = '0'
  }
  return (
    <div className={showButtomNav  ? 'navbar  navbar-stick': stickNavbar ? 'navbar navbar-stick' : 'navbar'}>
      {showNav ? (
        <>
          <Logo />
          <Nav /> <Icons number={4} />
        </>
      ) : !showButtomNav ? (
        <>
          <ToggleButton/> <Logo /> <Icons />
        </>
      ) : showButtomNav ? (
        <>
          <ToggleButton/> <Logo /> <div></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
