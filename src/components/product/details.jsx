import { faShoppingCart, faHeart, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Detail from "../product_details/details";
import {Link} from 'react-router-dom';
import Ordernow from  '../cart/ordernow';

const searchIcon = <FontAwesomeIcon icon={faHeart} />;
const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />;


// component that shows a detailed description of a product
const Details = ({ colorArr,sizeArr }) => {
  const rightIcon = <FontAwesomeIcon icon={faArrowRight} size="md" />;
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

  return (
    <>
      <div className="detail-header">
       
          <Detail/>
       
      </div>

      <div className="detail-buttons">

       
        {/* <div
          className="wishlist-btn btn btn-block"

          onClick={() => {
            if (!isUserLogged) {
              toast.info("Log in or register to add product to wishlist ! ", {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              return;
            }

            dispatch(wishlistActions.addProduct(product));
            toast.success("Product added to wishlist", {
              position: "bottom-right",
              autoClose: 1700,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
        > */}
          
        {/* </div> */}
        <div
          className="cart-btn btn btn-block"
          onClick={() => {

            if (!isUserLogged) {
              toast.info("Log in or register to add product to cart ! ", {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              return
            }

            dispatch(
              cartActions.addCartItem({
                product: product,
                quantity: 1,
                selectedColor: "",
                selectedSize: "",
              })
            );
            toast.success("Product added to Your order list", {
              position: "bottom-right",
              autoClose: 1700,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
        >
          <div className="product-btn-content">
            {shoppingCartIcon} Add to Order
          </div>
        </div>

        <div className="cart-btn btn btn-block">
            <Link to='/cart'>
              <button style={{backgroundColor:'rgb(180, 60, 45)', color:'white', borderStyle:'none'}}>
              {shoppingCartIcon} ORDER NOW
              </button>
            </Link>
            
          </div>

      </div>
      <div className="reviews-selector" onClick={() =>{ showRightDrawer('reviews')}}> <div className="text">Reviews</div> <div className="icon">{rightIcon}</div></div>
    </>
  );
};

export default Details;
