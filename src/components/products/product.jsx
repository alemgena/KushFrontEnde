import productImg2 from "../../images/product2.jpg";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "../../slices/product";
import { cartSlice } from "../../slices/cart";
import { wishlistSlice } from "../../slices/wishlist";
import { url } from "../../utils/url";
import { Link } from "react-router-dom";
import productAltImage from "../../icons/product.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import Skeleton from "react-loading-skeleton";
import { ToastContainer, toast } from "react-toastify";
import Rating from "@material-ui/lab/Rating";
const searchIcon = <FontAwesomeIcon icon={faHeart} />;
const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

// component that displays a single product
export const Product = ({
  wishlistBtn = true,
  vertical = true,
  onclick = {},
  link = {},
  details,
}) => {
  const dispatch = useDispatch();
  const md = useMediaQuery({ query: "(max-width: 992px)" });
  const mobileView = useMediaQuery({ query: "(max-width: 576px)" });
  const productActions = productSlice.actions;
  const cartActions = cartSlice.actions;
  const wishlistActions = wishlistSlice.actions;
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const [productImage, setProductImage] = useState("");
  useEffect(() => {
    setProductImage("");
    axios.get(`${url}user/getProductImages/${details.id}`).then(
      (response) => {
        if (response.data.productImages.length > 0) {
          setProductImage(
            `${url}images/${response.data.productImages[0].product_image}`
          );
        }
      },
      (error) => {}
    );
  }, [details]);

  const quickView = (id) => {
    dispatch(productActions.setProduct(details));
    dispatch(productActions.showModal());
  };

  return vertical ? (
    <div className="product">
      <div className="product-image">
        <Link to={`/product/${details.id}`}>
          {productImage ? (
            <img className="img-fluid" src={productImage} alt="" />
          ) : (
            <Skeleton
              style={{
                position: "relative",
                width: "100%",
                height: "0",
                paddingBottom: "100%",
              }}
            />
          )}
        </Link>

        {!md && (
          <div className={"product-buttons"}>
            <div className="wishlist-cart">
              {/* {" "}
              {wishlistBtn && (
                <div
                  className="product-btn btn btn-block"
                  onClick={(e) => {
                    if (!isUserLogged) {
                      toast.info(
                        "Log in or register to add product to wishlist ! ",
                        {
                          position: "top-left",
                          autoClose: 2000,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        }
                      );
                      return;
                    }

                    e.stopPropagation();

                    dispatch(wishlistActions.addProduct(details));

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
                  >
                  <div className="product-btn-content">{searchIcon} +</div>
                </div>
              )} */}
              <div
                className="product-btn btn btn-block"
                onClick={(e) => {
                  e.stopPropagation();

                  if (!isUserLogged) {
                    toast.info(
                      "Log in or register to add product to cart ! ",
                      {
                        position: "top-left",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      }
                    );
                    return;
                  }
                  dispatch(cartActions.addProduct(details));
                  dispatch(
                    cartActions.addCartItem({
                      product: details,
                      quantity: 1,
                      selectedColor: "",
                      selectedSize: "",
                    })
                  );
                  toast.success("Product added to cart", {
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
                <div className="product-btn-content">{shoppingCartIcon} + Add To Order List</div>
              </div>
            </div>

            {/* <div
              className="product-btn btn btn-block"
              onClick={(e) => {
                e.stopPropagation();

                quickView(details);
              }}
            >
              <div className="product-btn-content">quick view</div>
            </div> */}
          </div>
        )}
      </div>
      {md && (
        <div
          className={
            mobileView ? "mobile-product-buttons2" : "product-buttons2"
          }
        >
          {wishlistBtn && (
            <div
              className="product-btn btn btn-block"
              onClick={(e) => {
                e.stopPropagation();

                dispatch(wishlistActions.addProduct(details));

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
            >
              <div className="product-btn-content">{searchIcon} +</div>
            </div>
          )}
          <div
            className="product-btn btn btn-block"
            onClick={(e) => {
              e.stopPropagation();

              if (!isUserLogged) {
                toast.info(
                  "Log in or register to add product to cart ! ",
                  {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  }
                );
                return;
              }

              dispatch(cartActions.addProduct(details));
              dispatch(
                cartActions.addCartItem({
                  product: details,
                  quantity: 1,
                  selectedColor: "",
                  selectedSize: "",
                })
              );
              toast.success("Product added to cart", {
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
            <div className="product-btn-content">{shoppingCartIcon} +</div>
          </div>
        </div>
      )}

      <div className="product-text">

      <div className="rating">
         
          <Rating name="read-only" value={parseInt(details.totalRate)} readOnly />
        </div>
        <div className="product-title">{details.Name}</div>
        <div className="product-price">{details.Price + " birr"}</div>
      </div>
    </div>
  ) : (
    <div className="product-horizontal">
      <div className="product-image">
        <Link onClick={onclick} to={link}>
          {productImage ? (
            <img className="img-fluid" src={productImage} alt="" />
          ) : (
            <Skeleton
              style={{
                position: "relative",
                width: "100%",
                height: "0",
                paddingBottom: "100%",
              }}
            />
          )}
        </Link>
      </div>
      <div className="product-text">
        <Link onClick={onclick} to={link}>
          <div className="product-title">{details.Name}</div>
        </Link>
        <div className="product-price">{details.Price} Birr</div>
      </div>
    </div>
  );
};

export const ProductHorizontal = (details) => {
  return (
    <div className="product-horizontal">
      <div className="product-image">
        <img className="img-fluid" src={""} alt="" />
      </div>
      <div className="product-text">
        <div className="product-title">details.Name</div>
        <div className="product-price">details.Price Birr</div>
      </div>
    </div>
  );
};
