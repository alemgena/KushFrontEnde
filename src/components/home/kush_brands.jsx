import kushLogo from "../../images/kush_logo.png";
import visaLogo from "../../images/visa.png";
import mastercardLogo from "../../images/masters.png";

import {
  faChevronLeft,
  faChevronRight,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
const KushBrands = () => {
  // const [isScrolling, setIsScrolling] = useState(false);

  // useEffect(() => {
  //   // let scroller = setInterval(scrollBrands, 100);
  //   if(!isScrolling) {
  //     // alert('shfs')
  //   }
  // }, [isScrolling]);

  const leftIcon = <FontAwesomeIcon icon={faChevronLeft} size="lg" />;
  const rightIcon = <FontAwesomeIcon icon={faChevronRight} size="lg" />;

  // const scrollBrands = () => {
  //   if (!isScrolling) return;
  //   let kushBrands = document.querySelector(".kush-brands");

  //   // var scrollLeft = kushBrands.scrollLeft;
  //   // var scrollWidth = kushBrands.scrollWidth; // added
  //   // var offsetWidth = scrollWidth - offsetWidth; // added
  //   if (isScrolling) kushBrands.scrollLeft += 100;
  // };
  const scrollBrands = () => {
       
  }
  const scrollLeft  = () => {
    let kushBrands = document.querySelector(".kush-brands-content");
    kushBrands.scrollLeft -= 250;

  }
  const scrollRight  = () => {
    let kushBrands = document.querySelector(".kush-brands-content");
    kushBrands.scrollLeft += 250;

  }


  return (
    <div
      className="kush-brands"
      onMouseOver={() => {
        scrollBrands()
        // alert('ff')
        // setIsScrolling(true);
      }}
      onMouseLeave={() => {
        // alert('hs')
        // setIsScrolling(false);
      }}
    >
      <div className="icon left-icon" onClick={scrollLeft}>{leftIcon}</div>
      <div className="content kush-brands-content">
        <div className="brand-item">
          <img src={visaLogo} className="img-fluid" alt="" />
        </div>
        <div className="brand-item">
          <img src={mastercardLogo} className="img-fluid" alt="" style={{padding:'1cm'}}/>
        </div>
        <div className="brand-item">
          <img src={kushLogo} className="img-fluid" alt="" />
        </div>
        <div className="brand-item">
          <img src={mastercardLogo} className="img-fluid" alt="" style={{padding:'1cm'}} />
        </div>
        <div className="brand-item">
          <img src={kushLogo} className="img-fluid" alt="" />
        </div>
        <div className="brand-item">
          <img src={visaLogo} className="img-fluid" alt="" />
        </div>
        <div className="brand-item">
          <img src={kushLogo} className="img-fluid" alt="" />
        </div>
      </div>{" "}
      <div className="icon left-icon" onClick={scrollRight}>{rightIcon}</div>
    </div>
  );
};
export default KushBrands;
