import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { url } from "../../utils/url";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileSlice } from "../../slices/profile";
import { recoverPasswordSlice } from "../../slices/recover_password";

const RecoverPasswordContent = () => {
  const dispatch = useDispatch();
  const isLoading = false;
  const currentUser = useSelector((state) => state.login.loggedUser);
  const profileActions = profileSlice.actions;
  const recoverPasswordActions = recoverPasswordSlice.actions;
  const page = useSelector((state) => state.recoverPassword.page);
  const { firstName, lastName, phone, address } = useSelector(
    (state) => state.profile.inputValues
  );
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [codeErr, setCodeErr] = useState("");
  const [password1Err, setPassword1Err] = useState("");
  const [password2Err, setPassword2Err] = useState("");

  const validate = (e) => {
    e.preventDefault();
  };

  const sendVerificationCode = (e) => {
    e.preventDefault();
    axios
      .post(`${url}admin/sentEmail`, { email: email })
      .then(
        (response) => {
          if (response.data.sent) {
            dispatch(recoverPasswordActions.setPage(2));
          }
          ;
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const changePassword = (e) => {
    e.preventDefault();
    setCodeErr("");
    setPassword1Err("");
    setPassword2Err("");
    if (code.length !== 4) {
      setCodeErr("Code should be 4 characters!");
      return;
    }
    if (password1.length < 8) {
      setPassword1Err("Password should be atleast 8 characters!");
      return;
    }
    if (password2.length < 8) {
      setPassword2Err("Password should be atleast 8 characters!");
      return;
    }
    if (password1 !== password2) {
      setPassword2Err("Passwords must match!");
      return;
    }

    axios
      .post(`${url}admin/recoverPassword`, {
        email: email,
        activationCode: code,
        newPassword: password1,
      })
      .then(
        (response) => {
          if (response.data.password) {
            
            dispatch(recoverPasswordActions.setIsOpen(false))
            document.body.style.overflow = "visible";
            dispatch(recoverPasswordActions.setPasswordRecovered(true))
          }
          if (response.data.incorrectCode) {
            setCodeErr('Incorrect verification code!')
          }
          
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const verifyCode = (e) => {
    e.preventDefault();
    dispatch(recoverPasswordActions.setPage(3));
  };
  return (
    <div className="recover-password-content">
      {page === 1 ? (
        <form onSubmit={sendVerificationCode}>
          <div className="form-grp">
            <label htmlFor="email">Enter your email address</label>
            <input
              className="input"
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="form-error"></div>
          </div>

          <div className="form-grp">
            {" "}
            <div className="loading">{isLoading && <CircularProgress />}</div>
            <input
              type="submit"
              value="send verification code"
              className="btn btn-block"
            />
          </div>
        </form>
      ) : (
        <form onSubmit={changePassword}>
          <div className="form-grp">
            <label htmlFor="code">Verification code </label>
            <input
              className="input"
              type="text"
              id="code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
            <div className="form-error">{codeErr}</div>
          </div>

          <div className="form-grp">
            <label htmlFor="email">New password</label>
            <input
              className="input"
              type="password"
              id="password1"
              value={password1}
              onChange={(e) => {
                setPassword1(e.target.value);
              }}
            />
            <div className="form-error">{password1Err}</div>
          </div>
          <div className="form-grp">
            <label htmlFor="email">Confirm new password</label>
            <input
              className="input"
              type="password"
              id="password2"
              value={password2}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
            <div className="form-error">{password2Err}</div>
          </div>

          <div className="form-grp">
            {" "}
            <div className="loading">{isLoading && <CircularProgress />}</div>
            <input
              type="submit"
              value="Change password"
              className="btn btn-block"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default RecoverPasswordContent;
