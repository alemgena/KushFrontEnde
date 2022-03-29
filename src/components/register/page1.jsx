import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerSlice } from "../../slices/register";
import PageControl from "./page_control";


const Page1 = () => {
  const { firstNameErr, lastNameErr } = useSelector(
    (state) => state.register.inputErrors
  );
  const { firstName, lastName } = useSelector(
    (state) => state.register.inputValues
  );
  const dispatch = useDispatch();
  const actions = registerSlice.actions;
  
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const nextPage = () => {

    // Resetting

    dispatch(
      actions.setFirstNameError("")
    );
    dispatch(
      actions.setLastNameError("")
    );
   

    let isValid = true;

    if (lastName.length < 2) {
      dispatch(
        actions.setLastNameError("Last name should be at least 2 characters!")
      );
      lastNameRef.current.focus();
      isValid = false;
    }

    if (firstName.length < 2) {
      dispatch(
        actions.setFirstNameError("First name should be at least 2 characters!")
      );
      firstNameRef.current.focus();
      isValid = false;
    }
    if (isValid) dispatch(actions.nextPage());
  };

  return (
    <>
      <div className="form">
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            className="form-control"
            value = {
              firstName
            } 
            onChange={(e) => {
              dispatch(actions.setFirstName(e.target.value))
              if(firstName.length>1) 
              dispatch(
                
                actions.setFirstNameError("")
              );
            }}
            ref={firstNameRef}
          />
          <div className="form-error" id="first-name-err">
            {firstNameErr}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            className="form-control"
            value= {
              lastName
            } 
            onChange={(e) => {
              dispatch(actions.setLastName(e.target.value))
              if(lastName.length>1) 
              dispatch(
                actions.setLastNameError("")
              );
            }}
            ref={lastNameRef}
          />
          <div className="form-error" id="last-name-err">
            {lastNameErr}
          </div>
        </div>
      </div>
      <PageControl nextPageFunc={nextPage} />
    </>
  );
};

export default Page1;
