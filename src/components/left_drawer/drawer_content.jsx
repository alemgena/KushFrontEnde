import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../utils/url";
import axios from "axios";
import { categorySlice } from "../../slices/category";
import { Link } from "react-router-dom";
import { leftDrawerSlice } from "../../slices/left_drawer";
const DrawerContent = () => {
  const dispatch = useDispatch();
  const categoryActions = categorySlice.actions;
  const leftDrawerActions = leftDrawerSlice.actions;
  useEffect(() => {
    // dispatch(productsActions.setIsLoading(true));
    axios.get(`${url}user/getAllCatagory`).then(
      (response) => {
        // dispatch(productsActions.setIsLoading(false));
        // dispatch(productsActions.setProducts(response.data.product));

        dispatch(categoryActions.setCategories(response.data.catagory));
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const closeLeftDrawer = () => {
    dispatch(leftDrawerActions.hideDrawer());
    document.body.style.overflow = "visible";
  };

  const categories = useSelector((state) => state.category.categories);

  return (
    <div className="left-drawer-content">
      <div className="categories">
        {categories.map((category) => {
          return (
            <div className="item">
              {" "}
              <Link
                to={`/categories/${category.catagory_Name.toLowerCase()}`}
                onClick={() => {
                  dispatch(categoryActions.setActiveCategoryId(category.id));
                  closeLeftDrawer();
                }}
              >
                {category.catagory_Name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="footer-links">
        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link style={{ textDecoration: "none", color: "#666" }} to="/about">
            About Adimera
          </Link>
        </div>
      
        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link style={{ textDecoration: "none", color: "#666" }} to="/contactus">
            Contact Us
          </Link>
        </div>
      

        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link style={{ textDecoration: "none", color: "#666" }} to="/privacypolicy">
           Privacy Policy
          </Link>
        </div>

        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link style={{ textDecoration: "none", color: "#666" }} to="/deliveryandreturn">
          
          Delivery and Return
          </Link>
        </div>

        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link style={{ textDecoration: "none", color: "#666" }} to="/termsandconditions">
           Terms and Conditons
          </Link>
        </div>

        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link style={{ textDecoration: "none", color: "#666" }} to="/pricing">
           Pricing
          </Link>
        </div>

        <div
          className="item"
          onClick={() => {
            closeLeftDrawer();
          }}
        >
          <Link style={{ textDecoration: "none", color: "#666" }} to="/faq">
          FAQ
          </Link>
        </div>

      </div>
    </div>
  );
};

export default DrawerContent;
