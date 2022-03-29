import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { leftDrawerSlice } from "../../slices/left_drawer";
import { rightDrawerSlice } from "../../slices/right_drawer";

const ToggleButton = () => {
  const dispatch = useDispatch();
  const actions = rightDrawerSlice.actions;
  // const actions = leftDrawerSlice.actions;
  const toggleButton = <FontAwesomeIcon icon={faBars} size="lg" />;
  const showRightDrawer = () => {
    dispatch(actions.showDrawer());
    dispatch(actions.setType('yehagereNav'));
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="toggle-button" onClick={showRightDrawer}>
      {toggleButton}
    </div>
  );
};
export default ToggleButton;
