import axios from "axios";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Product, ProductHorizontal } from "./product";
import { productsSlice } from "../../slices/products";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../utils/url";
import Loading from "../loading/loading";

export const Products = () => {
  const productsActions = productsSlice.actions;
  const productImages = useSelector((state) => state.products.productImages);
  const isLoading = useSelector((state) => state.products.isLoading);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  // useEffect(() => {
  //   dispatch(productsActions.setIsLoading(true));
  //   axios.get(`${url}user/getAllProducts/0`).then(
  //     (response) => {
  //       //
  //       dispatch(productsActions.setIsLoading(false));
  //       if (response.data.products)
  //         dispatch(productsActions.setProducts(response.data.products));
  //     },
  //     (error) => {}
  //   );
  // }, []);

  // useEffect(() => {
  //   products.forEach((product) => {
  //     axios.get(`${url}user/getProductImages/${product.id}`).then(
  //       (response) => {
  //         // dispatch(productsActions.setIsLoading(false));
  //         // dispatch( productsActions.setProducts(response.data.products));

  //         dispatch(
  //           productsActions.addProductImages({
  //             productId: product.id,
  //             productImages: response.data.productImages,
  //           })
  //         );
  //       },
  //       (error) => {}
  //     );
  //   });
  // }, [products]);

  return (
    // {isLoading ? :  }
  
    <div className="products">
      <div className="products-title">New Products</div>
      {isLoading ? (
        <Loading  style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8em 0",
        }} />
      ) : (
        <div className="products-content">
          <Row>
            {products.length === 0
              ? ""
              : products.map((product) => {
                  return (
                    <Col key={product.id} xs={6} sm={4} md={4} xl={3}>
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
      )}
    </div>
  );
};

export const MostSearchedProducts = () => {
  return (
    <div className="most-searched-products">
      <ProductHorizontal />
      <ProductHorizontal />
      <ProductHorizontal />
      <ProductHorizontal />
      <ProductHorizontal />
      <ProductHorizontal />
      <ProductHorizontal />
      <ProductHorizontal />
      <ProductHorizontal />
    </div>
  );
};

export const CategoricalProducts = () => {
  const activeColumn = useSelector((state) => state.category.activeColumn);
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
  return (
    <div className="categorical-products">
      <Row>
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
        <Col xs={span}>
          <Product />
        </Col>
        <Col xs={span}>
          <Product />
        </Col>
      </Row>
    </div>
  );
};
