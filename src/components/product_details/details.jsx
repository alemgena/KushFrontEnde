import { faShoppingCart, faHeart, faWeight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productSlice } from "../../slices/product";
import { cartSlice } from "../../slices/cart";
import { wishlistSlice } from "../../slices/wishlist";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import { toast } from "react-toastify";
import { CirclePicker } from "react-color";
import Rating from "@material-ui/lab/Rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { rightDrawerSlice } from "../../slices/right_drawer";

import '../../css/details.css';

const searchIcon = <FontAwesomeIcon icon={faHeart} />;
const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

// component that shows a detailed description of a product
const Details = ({ colorArr, sizeArr }) => {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const productActions = productSlice.actions;
  const cartActions = cartSlice.actions;
  const wishlistActions = wishlistSlice.actions;
  const pageClicked = useSelector((state) => state.product.pageClicked);
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const rightDrawerActions = rightDrawerSlice.actions;

  const showRightDrawer = (type) => {
    dispatch(rightDrawerActions.showDrawer());
    dispatch(rightDrawerActions.setType(type));
    document.body.style.overflow = "hidden";
  };

   const Packaging = ["Per-Head  ", "Per-Leg  ", "Per-Something  "];
   const Status = ["Fit-for-Slaughter  ", "Fit-for-Something  "];
   const Delivery = ["FOB-Djibouti  ", "To-Home  ", "To-Somewhere  "];
// This is Product details to be display when we click on each product
  return (
    <>
    <div className="productDetail">
        <div className="detail-title">Breed Type:</div>
        <div className="breed" >{product.breed}</div>

        <div className="detail-title">Average Weight:</div>
        <div className="weight">{product.weight}</div>

        <div className="detail-title">Available Quantity:</div>
        <div className="quantity">{product.quantity}</div>
        <div className="detail-title">Available price:</div>
        <div className="quantity">{product.price}</div>
        <div className="detail-title">Packaging:</div>
        <div class="packaging">{Packaging  }</div>
        <div className="detail-title">Get a Quote:</div>
        <div className="quote">{product.quote}</div>

        <div className="detail-title">Status:</div>
        <span className="status">{Status}</span>

        <div className="detail-title">Delivery:</div>
        <div className="delivery">{Delivery}</div>
     </div>
    </>
  );
};

export default Details;