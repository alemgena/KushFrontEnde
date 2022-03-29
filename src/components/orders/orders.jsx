import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { config } from "../../utils/header";
import { url } from "../../utils/url";
import InfoPage from "../footer/info_page";
import OrderItem from "./order_item";
import { Redirect, useHistory } from "react-router";

const Orders = () => {
  const pageHistory = useHistory();
  const isUserLogged = useSelector((state) => state.login.isUserLogged);

  const [history, setHistory] = useState();
  const [activeOrders, setActiveOrders] = useState([]);
  const [approvedOrders, setApprovedOrders] = useState([]);
  const [declinedOrders, setDeclinedOrders] = useState([]);

  const [loading, setLoading] = useState();
  let rowNumber = 0;

  const formatHistory = (data) => {
    let curTimestamp = data[0].timeStamp;
    let prevTimestamp = data[0].timeStamp;
    let price = 0;
    let products = 0;
    for (let i = 0; i < data.length; i++) {
      curTimestamp = data[i].timeStamp;
      if (curTimestamp === prevTimestamp) {
        products += 1;
        price = price + parseInt(data[i].Price);
      } else {
        // setHistoryData([
        //   ...historyData,
        //   { date: data[i].date, products: products, total: price },
        // ]);
        let historyItem = {
          date: data[i].date,
          products: products,
          total: price,
        };
        let newHistory = history;
        newHistory.push(historyItem);
        setHistory(newHistory);

        products = 1;
        price = parseInt(data[i].Price);
      }
      if (i === data.length - 1) {
        // setHistoryData([
        //   ...historyData,
        //   { date: data[i].date, products: products, total: price },
        // ]);
        let historyItem = {
          date: data[i].date,
          products: products,
          total: price,
        };
        let newHistory = history;
        newHistory.push(historyItem);
        setHistory(newHistory);
      }

      prevTimestamp = data[i].timeStamp;
    }
  };
  const refreshOrders = useSelector(state => state.profile.refreshOrders)

  useEffect(() => {
    if (!localStorage.getItem("user_id") || !localStorage.getItem("token")) {
      pageHistory.push("/");
      return;
    }
    let userId = localStorage.getItem("user_id");

    axios.get(`${url}user/getActiveOrders/${userId}`, config).then(
      (response) => {
        console.log(response);
        if (response.data.orders) {
          setActiveOrders(response.data.orders);
          //   response.data.length > 0 && formatHistory(response.data);
        }
      },
      (error) => {
        console.log(error);
        // dispatch(loginActions.setIsLoading(false));
      }
    );
  }, [refreshOrders,isUserLogged]);

  useEffect(() => {
    let userId = localStorage.getItem("user_id");

    axios.get(`${url}user/getApprovedOrders/${userId}`, config).then(
      (response) => {
        console.log(response);
        if (response.data.orders) {
          setApprovedOrders(response.data.orders);
          //   response.data.length > 0 && formatHistory(response.data);
        }
      },
      (error) => {
        console.log(error);
        // dispatch(loginActions.setIsLoading(false));
      }
    );
  }, [refreshOrders]);
  useEffect(() => {
    let userId = localStorage.getItem("user_id");

    axios.get(`${url}user/getDeclinedOrders/${userId}`, config).then(
      (response) => {
        console.log(response);
        if (response.data.orders) {
          setDeclinedOrders(response.data.orders);
          //   response.data.length > 0 && formatHistory(response.data);
        }
      },
      (error) => {
        console.log(error);
        // dispatch(loginActions.setIsLoading(false));
      }
    );
  }, [refreshOrders]);

  return (
    <InfoPage title="My Orders">
      <div className="orders">
        <OrderItem title="pending orders" orders={activeOrders} />
        <OrderItem title="approved orders"  orders={approvedOrders} />
        <OrderItem title="declined orders"  orders={declinedOrders} />
      </div>
    </InfoPage>
  );
};

export default Orders;
