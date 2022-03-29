import { Col, Row } from "react-bootstrap";
import productImage from "../../images/product5.jpg";
import { faTrashAlt, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { url } from "../../utils/url";
import { cartSlice } from "../../slices/cart";
import { productSlice } from "../../slices/product";
import { useDispatch } from "react-redux";
import { CirclePicker } from "react-color";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import Select from "react-dropdown-select";
import "./newe.css"
//import {Packaging} from "../product_details/details";

// a single cart item in a cart list
  const Ordernow  = ({ cartItem, productImage }) => {
    const product = useSelector((state) => state.product.product);

  const removeIcon = <FontAwesomeIcon icon={faTrashAlt} />;
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;
  const minusIcon = <FontAwesomeIcon icon={faMinus} />;
  const cartActions = cartSlice.actions;
  const productAction=productSlice.actions;
  const dispatch = useDispatch();
  const [showEnterAmount, setShowEnterAmount] = useState(true);
  const removeCartItem = (id) => {
    dispatch(cartActions.removeCartItem(id));
  };
  const increaseQuantity = (id) => {
    dispatch(cartActions.increaseQuantity(id));
  };
  
  /*const [quantity, setFormData] = useState(product.quantity);
    const onChange = (e) =>
    setFormData({ ...quantity, [e.target.name]: e.target.value });*/
  const decreaseQuantity = (id) => {
    dispatch(cartActions.decreaseQuantity(id));
  };
  

  return (
    <div className='container'>
    <form >
       <div clasme="cart-item">
       <img className="img-fluid" src={productImage} alt="" />
            <div className="product-left">
          <label style={{color:'brown'}}>product name {product.productId}</label>
      <input
      className='inpu'
        type='text'
        name='name'
        value={product.Name}
      
      />   
      <lable style={{color:'brown'}}>price:</lable>
      <input className="inpu" type='text'value={product.Price }/>
      <label style={{color:'brown'}}>The Quantity</label>
                  <input
                   style={{marginLeft:'25px'}}
className="inpu"
                    type="number" min="1" 
                name="quantity"
                    
                    autoFocus
                    defaultValue={product.quantity}
                    onBlur={(e) => {
                      if (e.target.value) {
                        dispatch(
                          productAction.changeQuantity({
                           // id: product.productId,
                            amount: e.target.value,
                          })
                        );
                      }
                      setShowEnterAmount(true);
                    }}
                   
                  />
                
              </div>
            </div>
    <leble style={{color:'brown'}}>The Breed type</leble>
      <input  style={{marginLeft:'10px'}}
        type='text'
        name="Breed"
        className="inpu"
value={product.breed}
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
        className="inpu"
        value={product.Price * product.quantity} 
      />
  
      </form>
      </div>
  )
}
export default Ordernow;
