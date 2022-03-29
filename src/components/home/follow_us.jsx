import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faPinterest,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FollowUs = () => {
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} size="lg" />;
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="lg" />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="lg" />;
  const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} size="lg" />;
  const pinterestIcon = <FontAwesomeIcon icon={faPinterest} size="lg" />;

  return (
    <div className="follow-us">
      <div className="text">Follow Us</div>
      <div className="icons">
        <a
          href="https://www.facebook.com/ku.shlivestock/"
          target="_blank"
          style={{ color: "black" }}
        >
          {" "}
          <div className="icon-item">{facebookIcon}</div>
        </a>
        <a
          href="https://twitter.com/KushLivestock"
          target="_blank"
          style={{ color: "black" }}
        >
          {" "}
          <div className="icon-item">{twitterIcon}</div>
        </a>
        <a
          href="https://www.instagram.com/kushlivestock/"
          target="_blank"
          style={{ color: "black" }}
        >
          <div className="icon-item">{instagramIcon}</div>
        </a>
        <a
          href="https://www.linkedin.com/in/kushlivestock/"
          target="_blank"
          style={{ color: "black" }}
        >
          {" "}
          <div className="icon-item">{linkedInIcon}</div>
        </a>
        <a href="https://www.pinterest.com/kushlivestock/" target="_blank" style={{ color: "black" }}>
          {" "}
          <div className="icon-item">{pinterestIcon}</div>
        </a>
      </div>
    </div>
  );
};
export default FollowUs;
