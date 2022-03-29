import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <Link to='cart' style={{color:'black',textDecoration:'none'}}>  <div className="wishlist item">
      <div className="header">Cart</div>
      <div className="content">
      You have<h1>{cart.length}</h1> items in your cart
      </div>
    </div></Link>
  
  );
};

export default Cart;
