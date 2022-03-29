import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Wishlist = () => {
    const wishlist = useSelector(state => state.wishlist.products);
    return (
        <Link to='wishlist' style={{color:'black',textDecoration:'none'}}>  <div className="wishlist item">
              <div className="header">Wishlist</div>
              <div className="content">
                
               You have<h1>{wishlist.length}</h1> items in your wishlist

              </div>
            </div></Link>
      
    );
}

export default Wishlist;