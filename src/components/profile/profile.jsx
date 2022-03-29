import profileIcon from "../../icons/profile.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "react-bootstrap";
import History from "./history";
import Cart from "./cart";
import Wishlist from "./wishlist";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rightDrawerSlice } from "../../slices/right_drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import { loginSlice } from "../../slices/login";
import { config } from "../../utils/header";
import { profileSlice } from "../../slices/profile";
import { useMediaQuery } from "react-responsive";
const Profile = () => {
  const dispatch = useDispatch();
  const actions = rightDrawerSlice.actions;
  const loginActions = loginSlice.actions;
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const profileActions = profileSlice.actions;
  const profileUpdated = useSelector((state) => state.profile.profileUpdated);
  const history = useHistory();
  // let historyData = [];
  const [historyData, setHistoryData] = useState([]);
  const mobileView = useMediaQuery({ query: "(max-width: 576px)" });

  const user = useSelector((state) => state.login.loggedUser);

  useEffect(() => {
    if (!localStorage.getItem("user_id") || !localStorage.getItem("token")) {
      history.push("/");
      return;
    } else {
      let userId = localStorage.getItem("user_id");

      axios.get(`${url}profile/getAllProfile/${userId}`, config).then(
        (response) => {
          if (response.data.User) {
            dispatch(loginActions.setLoggedUser(response.data.User[0]));
          }
        },
        (error) => {
          console.log(error);
          // dispatch(loginActions.setIsLoading(false));
        }
      );
      axios.get(`${url}user/getAllHistory/${userId}`, config).then(
        (response) => {
          console.log(response);
          if (response.data) {
            console.log(response.data);
            setHistoryData(response.data);
            // response.data.length > 0 && formatHistory(response.data);
          }
        },
        (error) => {
          console.log(error);
          // dispatch(loginActions.setIsLoading(false));
        }
      );
    }
  }, [isUserLogged, profileUpdated]);

  const emailIcon = <FontAwesomeIcon icon={faEnvelope} size="lg" />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} size="lg" />;
  const addressIcon = <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />;

  const showEditProfileModal = () => {
    dispatch(profileActions.setShowEditProfile(true));
    document.body.style.overflow = "hidden";
  };
  const showChangePasswordModal = () => {
    dispatch(profileActions.setShowChangePassword(true));
    document.body.style.overflow = "hidden";
  };
  const deletePhoto = () => {
    axios.get(`${url}user/deleteProfileImage/${user.user_id}`).then(
      (response) => {
        console.log(response);
        if (response.data.success) {
          dispatch(profileActions.setProfileUpdated(!profileUpdated));
        }
      },
      (error) => {}
    );
  };
  return (
    <div className="profile">
      <div className="image">
        <img
          src={
            user.profilePicture
              ? `${url}images/${user.profilePicture}`
              : profileIcon
          }
          alt=""
        />
      </div>
      <div className="delete-photo">
        <div className="profile-btn" onClick={deletePhoto}>
          Delete Photo
        </div>
      </div>
      <div className="name">
        {user.firstName} {user.lastName}
      </div>
      <div
        className={
          !mobileView ? "edit-profile" : "edit-profile edit-profile-mobile"
        }
      >
        {" "}
        <div className="profile-btn" onClick={showEditProfileModal}>
          Edit Profile
        </div>
        {/* <div className="profile-btn" onClick={showEditProfileModal}>
          Change Email
        </div> */}
        <div className="profile-btn" onClick={showChangePasswordModal}>
          Change Password
        </div>
        <Link to="/orders">
          <div className="profile-btn">My Orders</div>
        </Link>
      </div>

      <div
        className={
          !mobileView ? "contact-list" : "contact-list contact-list-mobile"
        }
      >
        <div className="contact-item">
          <div className="icon">{phoneIcon}</div>
          <div className="text">{user.phone ? user.phone : "(No phone)"}</div>
        </div>
        <div className="contact-item">
          <div className="icon">{emailIcon}</div>
          <div className="text">{user.email ? user.email : "(No email)"}</div>
        </div>
        <div className="contact-item">
          <div className="icon">{addressIcon}</div>
          <div className="text">
            {user.address ? user.address : "(No address)"}{" "}
          </div>
        </div>
      </div>
      <div className="dashboard">
        <Row>
          <Col md={8}>
            <History historyData={historyData} />
          </Col>
          <Col md={4}>
            <Cart />
            <Wishlist />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Profile;
