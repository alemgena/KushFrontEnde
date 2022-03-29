import { Col, Row } from "react-bootstrap";
import productImg from "../../images/product5.jpg";
import { faTrashAlt, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { url } from "../../utils/url";
import { cartSlice } from "../../slices/cart";
import { useDispatch } from "react-redux";
import { CirclePicker } from "react-color";
import { useState } from "react";
import Select from "react-dropdown-select";

//import {Packaging} from "../product_details/details";

// a single cart item in a cart list
  const CartItem = ({ cartItem, productImage }) => {
  const removeIcon = <FontAwesomeIcon icon={faTrashAlt} />;
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;
  const minusIcon = <FontAwesomeIcon icon={faMinus} />;
  const cartActions = cartSlice.actions;
  const dispatch = useDispatch();
  const [showEnterAmount, setShowEnterAmount] = useState(false);
  const removeCartItem = (id) => {
    dispatch(cartActions.removeCartItem(id));
  };
  const increaseQuantity = (id) => {
    dispatch(cartActions.increaseQuantity(id));
  };
  const decreaseQuantity = (id) => {
    dispatch(cartActions.decreaseQuantity(id));
  };

  return (
    <div className="cart-item">
      <Row>
        <Col lg={5}>
          <div className="product">
            <img className="img-fluid" src={productImage} alt="" />
            <div className="product-left">
             <div className="product-title">{cartItem.product.Name}</div>
              <div
                className="remove icon"
                onClick={() => {
                  removeCartItem(cartItem.product.id);
                }}
              >
                {removeIcon}
              </div>
            </div>
          </div>
        </Col>
        <Col lg={1}>
          <div className="price">{cartItem.product.Price + " birr"}</div>
        </Col>
        <Col lg={1}>
          <div className="quantity">
            <div className="inner">
              {" "}
              {}
              <div className="amount">
                {" "}
                {!showEnterAmount ? (
                  <div
                    className="amount-div"
                    onClick={() => {
                      setShowEnterAmount(true);
                    }}
                  >
                    {cartItem.quantity}
                  </div>
                ) : (
                  <input
                    type="text"
                    className="amount-input"
                    autoFocus
                    
                    onBlur={(e) => {
                      if (e.target.value) {
                        dispatch(
                          cartActions.changeQuantity({
                            id: cartItem.product.id,
                            amount: e.target.value,
                          })
                        );
                      }
                      setShowEnterAmount(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        if (e.target.value) {
                          dispatch(
                            cartActions.changeQuantity({
                              id: cartItem.product.id,
                              amount: e.target.value,
                            })
                          );
                        }
                        setShowEnterAmount(false);
                      }
                    }}
                  />
                )}
              </div>
              {}
            </div>
          </div>
        </Col>
        {}
        {}
        <Col>

        </Col>
        <Col>
          <select className="amount" style={{width:'2.7cm', height:'1.5cm', display:'flex', alignContent:'center'}}>
            <option value="grapefruit" >Per-Something</option>
            <option value="lime">Per-Leg</option>
            <option selected value="coconut">Per-Head</option>
          </select>

        </Col>
        <Col lg={1}>
          <div className="total">
            {cartItem.product.Price * cartItem.quantity} birr
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default CartItem;
