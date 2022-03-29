import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { url } from "../../utils/url";
import { Product } from "../products/product";

const SimilarProducts = ({ productId }) => {

  const [similarProducts, setSimilarProducts] = useState([]);
  let a = [];

  useEffect(() => {
    axios.get(`${url}product/getProduct/${productId}`).then(
      (response) => {
        console.log(response)
        if (response.data) {
         
          let product = response.data;
          axios
            .get(`${url}product/getSimilarProducts/${product.Category_id}`)
            .then(
              (response) => {
                 
                if (response.data.products)
                   setSimilarProducts(response.data.products);
              },
              (error) => {
                console.log(error);
              }
            );
        }
      },
      (error) => {
        console.log(error);
      }
      
    );

  }, []);

  return (
    <div className="similar-products">
      <div className="header">similar products</div>
      <div className="content">
        <Row>
            {similarProducts.map(item=> {return <Col xs={6} sm={4} md={4} xl={3}>
            <Product details={item} />
          </Col> })}
          {/* <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col>
          <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col>
          <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col>
          <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col>
          <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col>
          <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col>
          <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col> */}
        </Row>
      </div>
    </div>
  );
};
export default SimilarProducts;
