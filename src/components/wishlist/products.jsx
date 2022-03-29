import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Product} from "../products/product";

const Products = () => {
  const activeColumn = useSelector((state) => state.wishlist.activeColumn);
  const products = useSelector(state => state.wishlist.products);

  let span = 12;

  switch (activeColumn) {
    case 1:
      span = 12;
      break;
    case 2:
      span = 6;
      break;
    case 3:
      span = 4;
      break;
    case 4:
      span = 3;
      break;
    case 5:
      span = 6;
      break;
    case 6:
      span = 2;
      break;
  }

   return <div className="categorical-products">
      <Row> {
        products.map(product => {
          return  <Col xs={span}>
          <Product wishlistBtn={false} details={product}/>
        </Col>
        })
        }
       
        {/* <Col xs={span}>
          <Product wishlistBtn={false}/>
        </Col>
        <Col xs={span}>
          <Product wishlistBtn={false}/>
        </Col>
        <Col xs={span}>
          <Product wishlistBtn={false}/>
        </Col>
        <Col xs={span}>
          <Product wishlistBtn={false}/>
        </Col>
        <Col xs={span}>
          <Product wishlistBtn={false}/>
        </Col>
        <Col xs={span}>
          <Product wishlistBtn={false}/>
        </Col>
        <Col xs={span}>
          <Product wishlistBtn={false}/>
        </Col>
        <Col xs={span}>
          <Product wishlistBtn={false}/>
        </Col>
        <Col xs={span}>
          <Product wishlistBtn={false}/>
        </Col> */}
      </Row>
    </div>
}

export default Products;