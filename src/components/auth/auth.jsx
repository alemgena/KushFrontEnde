import { useEffect } from "react";
import queryString from "query-string";
import { useHistory } from "react-router";
import { profileSlice } from "../../slices/profile";
import { useDispatch } from "react-redux";

const Auth = (props) => {
    const history = useHistory();
   const dispatch = useDispatch();
   const profileActions = profileSlice.actions;

  useEffect(() => {
    const value = queryString.parse(props.location.search);
    const token = value.token;
    const user_id = value.user_id;
    if (token && user_id) {
      localStorage.setItem("token", token);
      localStorage.setItem("user_id", user_id);
      history.push("profile");
      dispatch(profileActions.setShowEditProfile(true))
    }

    // localStorage.setItem("token", response.data.token);
    // localStorage.setItem("user_id", response.data.data.user_id);
    // dispatch(loginActions.setIsUserLogged(true));
    // dispatch(loginActions.setLoggedUser(response.data.data));
  }, []);
  return "";
};
export default Auth;
