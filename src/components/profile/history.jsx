import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../../utils/header";
import { url } from "../../utils/url";

const History = ({historyData}) => {
  // let historyData = [];
  const [history, setHistory] = useState([]);
  let rowNumber = 0;
  const formatHistory = (data) => {
    let curTimestamp = data[0].timeStamp;
    let prevTimestamp = data[0].timeStamp;
    let price = 0;
    let products = 0;
    for (let i = 0; i < data.length; i++) {
      let rowNumber = 1;
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

  useEffect(() => {
    // alert(historyData)
    historyData.length >0 && formatHistory(historyData)


  }, [historyData]);
  return (
    <div className="history item">
      <div className="header">History</div>
      <div className="content">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Number of Products</th>
              <th scope="col">Grand Total</th>
            </tr>
          </thead>
          <tbody>  
            {
             
            history.map((item) => {

              rowNumber++;
              return (
                <tr>
                  <th scope="row">{rowNumber}</th>
                  <td>{item.date}</td>
                  <td>{item.products}</td>
                  <td>{item.total} birr</td>
                </tr>
              );
            })}
    
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
