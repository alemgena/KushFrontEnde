
import Column from "./column";
import Products from "./products";
import Title from "./title";

const Wishlist = () => {
    return (
        <div className="wishlist">
             <Title/>
              <div className="control">
                  <Column/>
              </div>
              <Products/>
        </div>
      
    );
}

export default Wishlist;