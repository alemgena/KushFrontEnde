import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileSlice } from "../../slices/profile";
import { url } from "../../utils/url";
import profileIcon from "../../icons/profile.svg";
import { toast } from "react-toastify";

const SlipContent = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [showCouponForm, setShowCouponForm] = useState(false);
  const [code, setCode] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [couponDiscount,setCouponDiscount] = useState(1)
  let rowNumber = 0;
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.product.Price * cartItem.quantity;
    });

    return total * couponDiscount;
  };
  const getTotalTax = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.product.Price * 0.15 * cartItem.quantity;
    });

    return total;
  };
  const checkCoupon = () => {
    axios.post(`${url}product/checkCouponCode`, { code: code }).then(
      (response) => {
        console.log(response);
        if (response.data) {
          if (response.data.success) {
            let percentage = response.data.result[0].percentage;
            setMessage({
              type: "success",
              text: `Successfully discounted by ${percentage} % `,
            });
            let discountValue = parseInt(percentage)/100;
            setCouponDiscount(discountValue);
          } else {
            setCouponDiscount(1);
            setMessage({
              type: "error",
              text: `Incorrect code `,
            });
          }
        } else {
        }
      },
      (error) => {}
    );
  };
  return (
    <div className="slip-content">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">SN</th>
            {/* <th scope="col">Code</th> */}
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            rowNumber++;
            return (
              <tr>
                <th scope="row">{rowNumber}</th>
                {/* <td>{item.product.Code}</td> */}
                <td>{item.product.Name}</td>
                <td>{item.product.Price}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.product.Price}</td>
              </tr>
            );
          })}
          {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
        </tbody>
      </table>
      <div className="bottom">
        <div className="coupon">
          {showCouponForm ? (
            <div className="coupon-form">
              <input
                type="text"
                placeholder="Enter coupon code here"
                className="form-control"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
              <button
                className="btn apply-btn adimera-btn"
                onClick={checkCoupon}
              >
                Apply
              </button>
            </div>
          ) : (
            <button
              className="btn adimera-btn"
              onClick={() => {
                setShowCouponForm(true);
              }}
            >
              Apply Coupon
            </button>
          )}

          {/*  */}
          <div
            className={
              message.type === "success"
                ? "message success-message"
                : message.type === "error"
                ? "message error-message"
                : "message"
            }
          >
            {message.text}
          </div>
        </div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th scope="row">SUB TOTAL</th>
              <td>{getTotalPrice()} birr</td>
            </tr>
            <tr>
              <th scope="row">VAT</th>
              <td>{getTotalTax()} birr</td>
            </tr>
            <tr>
              <th scope="row">GRAND TOTAL</th>
              <td>{getTotalTax() + getTotalPrice()} birr</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SlipContent;
