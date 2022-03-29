import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import { Products } from "../products/products";
import HomeCarousel from "./home_carousel";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import KushHomeTop from "./kush_home_top";
import KushBrands from "./kush_brands";
import KushHomeBottom from "./kush_home_bottom";

const Home = () => {
  const md = useMediaQuery({ query: "(max-width: 576px)" });
  const showAd = useMediaQuery({ query: "(min-width: 992px)" }) ;
  const [leftAds, setLeftAds] = useState([]);
  const [rightAds, setRightAds] = useState([]);

  useEffect(() => {
    
    axios.get(`${url}user/getAllAdvertise`).then(
      (response) => {
        if (response.data) {
          ;
          for (let i = 1; i <= response.data.length; i++) {
            if (i % 2 !== 0) {
              let newLeftAds = leftAds;
              newLeftAds.push(response.data[i - 1]);
              setLeftAds(newLeftAds);
            } else {
              let newRightAds = rightAds;
              newRightAds.push(response.data[i - 1]);
              setLeftAds(newRightAds);
            }
          }
        }
      },
      (error) => {}
    );
  }, []);

  return (
    <>
      {/* {!md && <HomeCarousel />} */}

      <main>
        {false && (
          <>
            <div className="ad">
              {leftAds.map((item) => {
                return <img src={`${url}images/${item.advertiseImage}`} alt="ad image"/>;
              })}
            </div>
          </>
        )}
        <KushHomeTop/>
        <Products/>
        <KushBrands/>
        <h2 style={{fontStyle:'normal', fontFamily:'arial', fontWeight:'bold', textDecoration:'none'}}>ADVERTISING OPPORTUNITIES</h2>
        <p style={{backgroundColor:'white', textIndent:'1cm'}}> We offer several ways of  
           promoting your company through our website.
           We offer banners, several promotion memberships for your listing on our website, 
           the possiblity of emailing members through our website and more.
           Feel free to contact us here to inform us about the possibilities.
          You can always start with registering your company for free, which gives you a 
          listing on our website and the possiblity to access our website.
        </p>
        <KushHomeBottom/>
        {false && (
          <>
            <div className="ad">
              {rightAds.map((item) => {
                return <img src={`${url}images/${item.advertiseImage}`} alt="ad image"/>;
              })}
            </div>
          </>
        )}
      </main>
    </>
  );
};
export default Home;
