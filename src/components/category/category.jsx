import Control from "../control/control";
import Title from "./title";
import Products from "./products";
import { useEffect } from "react";
import CategoriesList from "./categories_list";

const Category = (props) => {
  const location = props.location.pathname;
  const route = location.substring(location.lastIndexOf("/") + 1);
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="category">
      <Title title={route}/>

      {route === "categories" ? (
        <CategoriesList/>
      ) : (
        <>
          <Control />
          <Products category={route} />
        </>
      )}
    </div>
  );
};
export default Category;
