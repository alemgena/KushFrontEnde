// import { url } from "../utils/url";
// import { useDispatch, useSelector } from "react-redux";
// import { registerSlice } from "../slices/register";
// import axios from "axios";

// export const registerUser = (inputValues) => {
//   const registerActions = registerSlice.actions;
//   const { firstName, lastName, email, phone, address, password1 } = inputValues;
//   const dispatch = useDispatch();
//   // console.log(url)
//   let config = {
//     headers: {
//       "Content-type": "application/json",
//       mode: "cors",
//     },
//   };
//   dispatch(registerActions.setIsLoading(true));
//   dispatch(registerActions.setRegistrationSuccessful(false));

//   axios
//     .post(
//       `${url}/user/registerUsers/`,
//       {
//         firstName: firstName,
//         lastName: lastName,
//         phone: phone,
//         email: email,
//         password: password1,
//         address: address,
//       },
//       config
//     )
//     .then(
//       (response) => {
//         ;

//         dispatch(registerActions.setIsLoading(false));
//         if (response.data.success);
//         dispatch(registerActions.setRegistrationSuccessful(true));
//       },
//       (error) => {
//         console.log(error);
//         dispatch(registerActions.setIsLoading(false));
//       }
//     );
// };
