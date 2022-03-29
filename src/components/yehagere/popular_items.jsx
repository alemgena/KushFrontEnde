import axios from "axios";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import { productsSlice } from "../../slices/products";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../utils/url";
import { Product } from "../products/product";


const PopularItems = () => {
    const productsActions = productsSlice.actions;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productsActions.setIsLoading(true));
        axios.get(`${url}product/getPopularProducts`).then(
          (response) => {
            console.log(response)
            dispatch(productsActions.setProducts([]));
            dispatch(productsActions.setIsLoading(false));
            if(response.data.result)
            dispatch(productsActions.setProducts(response.data.result));
          },
          (error) => {}
        );
      }, []);
      const products = useSelector((state) => state.products.products);

    return <div className="popular-items">
        <div className="popular-title">Popular Items</div>
        <div className="popular-content">
        <Row style={{justifyContent:'center'}} >
          {products.length === 0
            ? ""
            : products.map((product) => {
                return (
                  <Col  key={product.id} xs={6} sm={4} md={4} xl={3}>
                    <Product
                     
                      name={product.Name}
                      price={product.Price}
                      details={product}
                    />
                  </Col>
                );
              })}

         
        </Row>
        </div>
    </div>

}
export default PopularItems;