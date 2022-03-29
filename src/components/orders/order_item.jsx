import axios from "axios";
import { useDispatch } from "react-redux";
import { productSlice } from "../../slices/product";
import { profileSlice } from "../../slices/profile";
import { url } from "../../utils/url";

const OrderItem = ({ title, orders }) => {
  const profileActions = profileSlice.actions;
  const productActions = productSlice.actions;
  const dispatch = useDispatch();
  const quickView = (id) => {
    dispatch(productActions.setProduct({id:id}));
    dispatch(productActions.showModal());
    document.body.style.overflow = 'hidden';
  };
  let rowNumber = 0;
  const handleCancel = (id) => {
    axios.post(`${url}user/changePurchaseStatus`, { id: id, status: 3 }).then(
      (response) => {
        if(response.data.success) {
          dispatch(profileActions.updateOrders())
        }
      },
      (error) => {}
    );
  };
  return (
    <div className="order-item">
      <div className="order-item-header">{title}</div>
      <div className="content table-responsive-lg">
        {" "}
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order ID</th>
              <th scope="col">Product Id</th>
              <th scope="col">Date</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => {
              rowNumber++;
              return (
                <tr>
                  <th scope="row">{rowNumber}</th>
                  <td>{item.OrderID}</td>
                  <td>{item.product_id}</td>
                  <td>{item.date}</td>
                  <td>{item.quantity}</td>
                  <td >
                  <div
                      className="btn text-nowrap adimera-btn"
                      onClick={() => quickView(item.product_id)}
                    >
                      View Product
                    </div>
                    <div
                      className="btn text-nowrap adimera-btn"
                      onClick={() => handleCancel(item.id)}
                      style={{marginLeft:'1em'}}
                    >
                      Cancel
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrderItem;
