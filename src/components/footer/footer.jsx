import { Col, Row } from "react-bootstrap";
import emailjs from 'emailjs-com';
import '../../css/footer.css';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faCcMastercard,
  faCcVisa,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import {Link} from 'react-router-dom';
import { BorderLeft } from "@material-ui/icons";

const Footer = () => {
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} size={"lg"} />;
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} size={"lg"} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size={"lg"} />;
  const instagtamIcon = <FontAwesomeIcon icon={faInstagram} size={"lg"} />;
  const pinterestIcon = <FontAwesomeIcon icon={faPinterest} size={"lg"} />;
  const xs = useMediaQuery({ query: "(max-width: 576px" });
  const mastercardIcon = <FontAwesomeIcon icon={faCcMastercard} size={"3x"} />;
  const visaIcon = <FontAwesomeIcon icon={faCcVisa} size={"3x"} />;

  const colStyle = {
    display: "flex",
    alignItems: "center",
  };

      function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_ue1uayk', e.target, 'user_zbxID1SPlG61lLhaViFVF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

  return (
    <div className="footer">
        {/* <Row>
          
          <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="c0l-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="c0l-8 form-group mx-auto">
                            <input type="email" className="form-control" placeholder="Email address" name="email"/>
                        </div>
                        <div className="c0l-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="c0l-8 form-group mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"/>
                        </div>
                        <div className="c0l-8 form-group mx-auto">
                            <input type="submit" className="btn btn-info" value="send message"></input>
                        </div>
                    </div>
                </form>
            </div>

        </div>
      </Row> */}
      <Row>
        <Col style={{paddingLeft:'70px'}}>
          <div className="col-inner">
            <div className="content">
            <div className="header">Our Address</div>
              <div className="footer-item">contact@kushlivestock.com</div>
              <div className="footer-item">+251 963 522 318</div>
              <div className="footer-item">Addis Ababa, Ethiopia</div>
              
            </div>
          </div>
          <div className="col-inner">
            {" "}
            <div className="header">We accept</div>
            <div className="content">
              {" "}
              <div
                className="payment-icons"
                style={
                  !xs ? { display: "flex", justifyContent: "flex-start" } : {}
                }
              >
                <div
                  className="icon"
                  style={{ width: "max-content", marginRight: ".55em" }}
                >
                  {mastercardIcon}
                </div>
                <div
                  className="icon"
                  style={{ width: "max-content", marginRight: ".55em" }}
                >
                  {visaIcon}
                </div>
              </div>
            </div>
          </div>
          <div className="col-inner">
            <div className="header">Connect with us</div>
            <div className="content">
              <div className="social-icons" style={{ display: "flex" }}>
                <a
                  href="https://www.facebook.com/ku.shlivestock/"
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <div className="icon-item">
                    <div className="icon">{facebookIcon}</div>
                  </div>
                </a>
                <a href="https://twitter.com/KushLivestock" target="_blank" style={{ color: "black" }}>
                  <div className="icon-item">
                    <div className="icon">{twitterIcon}</div>
                  </div>
                </a>

                <a href="https://www.instagram.com/kushlivestock/" target="_blank" style={{ color: "black" }}>
                  <div className="icon-item">
                    <div className="icon">{instagtamIcon}</div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/kushlivestock/" target="_blank" style={{ color: "black" }}>
                  <div className="icon-item">
                    <div className="icon">{linkedinIcon}</div>
                  </div>
                </a>

                <a href="https://www.pinterest.com/kushlivestock/" target="_blank" style={{ color: "black" }}>
                  {" "}
                  <div className="icon-item">
                    <div className="icon">{pinterestIcon}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="col-inner">
            <div className="content">

                 <Link to="/about_us" style={{ color: "black" }}>
                    <div className="footer-link">About Kush Livestock</div>
                  </Link>
                  <Link to="/privacypolicy" style={{ color: "black" }}>
                    <div className="footer-link">Privacy Policy</div>
                  </Link>
                  <Link to="/deliveryandreturn" style={{ color: "black" }}>
                    <div className="footer-link">
                      Delivery and Return Policy
                    </div>
                  </Link>
                  <Link to="/termsandconditions" style={{ color: "black" }}>
                    <div className="footer-link">Terms and Conditions</div>
                  </Link>
                  <Link to="/pricing" style={{ color: "black" }}>
                    <div className="footer-link">Pricing</div>
                  </Link>
                  
                      <Link to="/partners" style={{ color: "black" }}>
                        <div className="footer-link">Partners</div>
                      </Link>
                      <Link to="/advertise" style={{ color: "black" }}>
                        <div className="footer-link">Advertise</div>
                      </Link>
                      <Link to="/membership" style={{ color: "black" }}>
                        <div className="footer-link">Membership </div>
                      </Link>
                      <Link to="/faq" style={{ color: "black" }}>
                    <div className="footer-link">FAQ</div>
                  </Link>
      
                  
              {/* <div className="footer-link">Privacy Policy</div>
              <div className="footer-link">Delivery and Return Pollicy</div>
              <div className="footer-link">Terms and Conditions</div>
              <div className="footer-link">Pricing</div>
              <div className="footer-link">FAQ</div> */}
            </div>
          </div>
        </Col>
      

        <Col>

              
          <div className="col-inner">
          <div className="header">Contact us</div>
          <form onSubmit={sendEmail} method="post">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="abox" aria-describedby="emailHelp" required/>
            </div>

            <div className="form-group">
              <label>Subject:</label>
              <input type="text" className="abox" required/>
            </div>

            <div className="form-group"> 
              <label htmlFor="message">Message</label>
                <textarea className="abox" cols="23" rows="2"/>
            </div>

            <div>
              <button type="submit" className="subbtn" value="send message">Submit</button>
            </div>
            
              
              
            
          </form>
          </div>
        </Col>
        {/* <Col>
          <div className="col-inner">
            <div className="header">Stay up to date</div>
            <div className="content">
              <form action="" className="form">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                />
                <input
                  type="text"
                  placeholder="Your email"
                  className="form-control"
                />
                <textarea
                  name=""
                  id=""
                  
                  rows="2"
                  placeholder="Your message"
                  className="form-control"
                ></textarea>
                <input
                  type="submit"
                  value="SUBMIT"
                  className="btn submit-btn"
                />
              </form>
            </div>
          </div>
        </Col> */}
      </Row>
      <Row>
        <Col>
          <div className="all-right" style={{display:'flex', textAlign:'center'}}>
            &copy;2021 Kushlivestock . All rights reserved.
          </div>
        </Col>
      </Row>
        
     
      
    </div>
  );
};
export default Footer;
