import { Col, Row } from "react-bootstrap";
import productImage from "../../images/product5.jpg";
import { faTrashAlt, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { url } from "../../utils/url";
import { cartSlice } from "../../slices/cart";
import { useDispatch } from "react-redux";
import { CirclePicker } from "react-color";
import { useState } from "react";
import Select from "react-dropdown-select";
import "./newe.css"
//import {Packaging} from "../product_details/details";

// a single cart item in a cart list
  const CartItem1 = ({ cartItem, productImage }) => {
  const removeIcon = <FontAwesomeIcon icon={faTrashAlt} />;
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;
  const minusIcon = <FontAwesomeIcon icon={faMinus} />;
  const cartActions = cartSlice.actions;
  const dispatch = useDispatch();
  const [showEnterAmount, setShowEnterAmount] = useState(true);
  const [formData, setFormData] = useState({quantity});
  
  const { quantity} = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <div className='container'>
    <form >
       <div clasme="cart-item">
 
            <div className="product-left">
          <label style={{color:'brown'}}>product name</label>
      <input
        type='text'
        name='name'
        value={cartItem.product.Name}
      
      />   
      <lable style={{color:'brown'}}>price:</lable>
      <input type='text'value={cartItem.product.Price }/>
      <label style={{color:'brown'}}>The Quantity</label>
                  <input
                   style={{marginLeft:'25px'}}
                    type="text"
                    onChange={(e) => onChange(e)}
                name="quantity"
             
                    autoFocus
                    defaultValue={quantity}
                    onBlur={(e) => {
                      if (e.target.value) {
                        dispatch(
                          cartActions.changeQuantity({
                            id: cartItem.product.id,
                            amount: e.target.value,
                          })
                        );
                      }
                      setShowEnterAmount(true);
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
                        setShowEnterAmount(true);
                      }
                    }}
                  />
                
              </div>
            </div>
    <leble style={{color:'brown'}}>The Breed type</leble>
      <input  style={{marginLeft:'10px'}}
        type='text'
        name="Breed"

      /> <br></br>
     <label style={{color:'brown'}}>Packaging</label> 
      <select   style={{marginLeft:'40px'}}>
            <option value="grapefruit" >Per-Something</option>
            <option value="lime">Per-Leg</option>
            <option selected value="coconut">Per-Head</option>
          </select>
          <br></br>
          <label style={{color:'brown'}}>Totale Price</label>
          <input  style={{marginLeft:'30px'}}
        type='text'
        name='price'
        value={cartItem.product.Price * cartItem.quantity} 
      />
  
      </form>
      </div>
  );
};
export default CartItem1;
