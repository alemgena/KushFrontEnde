import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { registerSlice } from "../../slices/register";



const ModalHeader = () => {
    const dispatch = useDispatch();
    const actions = registerSlice.actions;
    const closeModal = () => {
        dispatch(actions.hideModal());
    }
  return (

    <div className="header">
     
      <div className="hide" onClick={closeModal}>
          
        &times;
      </div>
    </div>
  );
};

export default ModalHeader;
