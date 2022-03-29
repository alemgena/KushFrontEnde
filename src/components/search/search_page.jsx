import { useEffect } from "react";
import Products from "./products";
const SearchPage = (props) => {
  const location = props.location.pathname;
  const route = location.substring(location.lastIndexOf("/") + 1);

  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);




  return (
    <div className="search-page">
      <div className="search-title">Search results for "{route}" </div>
      <div className="content">
       <Products query={route}/>
      </div>
    </div>
  );
};
export default SearchPage;
