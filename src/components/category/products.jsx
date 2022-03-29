import axios from "axios";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Product, ProductHorizontal } from "../products/product";
import { productsSlice } from "../../slices/products";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../utils/url";
import { categorySlice } from "../../slices/category";
import Loading from "../loading/loading";

const Products = ({ category }) => {
  const activeColumn = useSelector((state) => state.category.activeColumn);
  let span = 12;
  const categoryActions = categorySlice.actions;
  const dispatch = useDispatch();
  const activeCategoryId = useSelector(
    (state) => state.category.activeCategoryId
  );
  const areProductsLoading = useSelector(
    (state) => state.category.areProductsLoading
  );
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

  useEffect(() => {
    dispatch(categoryActions.setAreProductsLoading(true));
    dispatch(categoryActions.setProducts([]));
    axios.get(`${url}user/productByCatagory/${category}`).then(
      (response) => {
        console.log(response)
        dispatch(categoryActions.setAreProductsLoading(false));
        dispatch(categoryActions.setProducts(response.data.products));
      },
      (error) => {
        dispatch(categoryActions.setAreProductsLoading(false));
        console.log(error);
      }
    );
  }, [activeCategoryId,category]);

  const products = useSelector((state) => state.category.products);
  return (
    <div className="categorical-products">
      {areProductsLoading ? (
        <Loading  style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8em 0",
        }}/>
      ) : (
        <Row>
          {products.length === 0 ? (
            <div className="no-products py-5">
              <h1 className="pb-5">No products found in this category!</h1>
            </div>
          ) : (
            products.map((product) => {
              return (
                <Col key={product.id} xs={span}>
                  <Product
                    img={`${url}images/${product.Image}`}
                    name={product.Name}
                    price={product.Price}
                    details={product}
                  />
                </Col>
              );
            })
          )}
          {/* <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}> */}
          {/* <Product />
          </Col> */}
        </Row>
      )}
    </div>
  );
};

export default Products;
