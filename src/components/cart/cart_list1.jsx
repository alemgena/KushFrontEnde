import { useSelector, useDispatch } from "react-redux";
import Order from './ordernow';
import CartListHeader from "./cart_list_header";
import { useMediaQuery } from "react-responsive";
import { Col, Row } from "react-bootstrap";
import FetchCartImages from "../utils/fetch_cart_images";
import { slipSlice } from "../../slices/slip";
import { url } from "../../utils/url";
import axios from "axios";
import { cartSlice } from "../../slices/cart";
import { toast } from "react-toastify";
//contain the whole list of cart items
const CartList1 = () => {
  const product = useSelector((state) => state.product.product);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const cartActions = cartSlice.actions;

  const showHeader = useMediaQuery({ query: "(min-width: 992px)" });
  const productImages = useSelector((state) => state.cart.productImages);
  const slipActions = slipSlice.actions;

  const dispatch = useDispatch();
  const getTotalPrice = () => {
    let total = 0;
 
      total += product.Price * product.quantity;
  

    return total;
  };
  const getTotalTax = () => {
    let total = 0;
    
      total += product.Price * 0.15 * product.quantity;
    

    return total;
  };

  const openSlip = () => {
    if (!isUserLogged) {
      toast.info("Log in or register to purchase ! ", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    
    }

    const userId = localStorage.getItem("user_id");

    const cartItemsForDb = [];

    cartItems.forEach((cartItem) => {
      cartItemsForDb.push({
        user_id: parseInt(userId),
        product_id: cartItem.product.id,
        quantity: cartItem.quantity,
        selectedColor: cartItem.selectedColor,
        selectedSize: cartItem.selectedSize,
      });
    });

    dispatch(cartActions.setSavingCart(true));

    axios.post(`${url}user/createCart`, cartItemsForDb).then(
      (response) => {
        if (response.data.success) {        
        }
        dispatch(cartActions.setSavingCart(false));
        // ;
      },
      (error) => {
        console.log(error);
      }
    );

    axios
    .post(`${url}user/saveToCart`, cartItemsForDb)
    .then(
      (response) => {
        if (response.data.success) {

          toast.success("Order successfully submitted!", {
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        dispatch(cartActions.setSavingCart(false));
      },
      (error) => {
        console.log(error);
      }
    );


    dispatch(slipActions.setIsOpen(true));
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div className="cart-list">
      
           <Order />;
      

        <div className="pricing">
          <div className="items">
            {" "}
            <div className="item">
              <div className="text">sub total:</div>
              <div className="price">{getTotalPrice()} birr</div>
            </div>
            <div className="item">
              <div className="text">vat:</div>
              <div className="price">{getTotalTax()} birr</div>
            </div>
            <div className="item">
              <div className="text">Grand Total:</div>
              <div className="price">
                {getTotalTax() + getTotalPrice()} birr
              </div>
            </div>
            <div className="item">
              <div className="text"></div>
              <div className="price">
                <div className=" adimera-btn " onClick={openSlip}>
                  Submit Order
                </div>{" "}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default CartList1;
