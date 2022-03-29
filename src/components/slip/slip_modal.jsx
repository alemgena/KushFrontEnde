import Close from "@material-ui/icons/Close";
// import { productSlice } from "../../slices/product";
import { useDispatch, useSelector } from "react-redux";
import Dimmer from "../utils/dimmer";
import { profileSlice } from "../../slices/profile";
// import EditProfileContent from "./edit_profile_content";
import { useMediaQuery } from "react-responsive";
import { slipSlice } from "../../slices/slip";
import SlipContent from "./slip_content";
const SlipModal = () => {
  const xs = useMediaQuery({ query: "(max-width: 576px" });
  const sm = useMediaQuery({ query: "(min-width: 576px)" });
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const lg = useMediaQuery({ query: "(min-width: 992px)" });
  const xl = useMediaQuery({ query: "(min-width: 1200px)" });
  let width = "inherit";

  if (xl) width = "60%";
  else if (lg) width = "70%";
  else if (md) width = "80%";
  else if (sm) width = "90%";
  else if (xs) width = "99%";

  const style = {
    width: width,
    maxHeight: "90%",
  };

  const slipActions = slipSlice.actions;
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(slipActions.setIsOpen(false));
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <Dimmer />
      <div className="slip-modal" style={style}>
        <div className="header">
          <div className="close-modal" onClick={closeModal}>
            <Close />
          </div>
        </div>
        <SlipContent/>
        {/* <ProductDetails/> */}
        {/* <EditProfileContent /> */}
      </div>
    </>
  );
};

export default SlipModal;
