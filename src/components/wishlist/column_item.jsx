import { useDispatch } from "react-redux";
import { wishlistSlice } from "../../slices/wishlist";

const ColumnItem = ({ size ,active }) => {
  let classList = 'column-item';
  if(active) classList+=' active';
  const dispatch = useDispatch()
  const actions = wishlistSlice.actions;
  
  const setActiveColumn = () => {
     dispatch(actions.setActiveColumn(size))
  }

  return (
    <div className={classList} onClick={setActiveColumn}>
      {size === 1 ? (
        <div className="column-box one"></div>
      ) : size === 2 ? (
        <>
          <div className="column-box"></div>
          <div className="column-box"></div>{" "}
        </>
      ) : size === 3 ? (
        <>
          <div className="column-box"></div>
          <div className="column-box"></div>
          <div className="column-box"></div>{" "}
        </>
      ) : size === 4 ? (
        <>
          <div className="column-box"></div>
          <div className="column-box"></div>
          <div className="column-box"></div>
          <div className="column-box"></div>{" "}
        </>
      ) : size === 5 ? (
        <>
          <div className="column-box"></div>
          <div className="column-box"></div>
          <div className="column-box"></div>
          <div className="column-box"></div>
          <div className="column-box"></div>{" "}
        </>
      ) : size === 6 ? (
        <>
          <div className="column-box"></div>
          <div className="column-box"></div>
          <div className="column-box"></div>
          <div className="column-box"></div>
          <div className="column-box"></div>
          <div className="column-box"></div>{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ColumnItem;
