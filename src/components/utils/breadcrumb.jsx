import { Breadcrumbs } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { url } from "../../utils/url";
const Breadcrumb = () => {
  let location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState(["dave", "dave"]);
  useEffect(() => {
      setBreadcrumbs([])
    if (location.pathname.includes("product")) {
      let productId = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1
      );

      axios.get(`${url}product/getProduct/${productId}`).then(
        (response) => {
          if (response.data) {
            axios
              .get(`${url}user/getSingleCatagory/${response.data.Category_id}`)
              .then(
                (response) => {
                  if (response.data.catagory) {
                    let categoryName = response.data.catagory.catagory_Name;

                    setBreadcrumbs([
                      { name: "Categories", link: "categories" },
                      {
                        name: categoryName,
                        link: `categories/${categoryName}`,
                      },
                    ]);
                  }
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

      return;
    }

    let tempBreadcrumpNames = [];
    let tempBreadcrumpItems = [];
    let routes = location.pathname.split("/");
    for (let i = 0; i < routes.length; i++) {
      if (routes[i]) {
        tempBreadcrumpNames.push(routes[i]);
        tempBreadcrumpItems.push({
          name: routes[i],
          link: tempBreadcrumpNames.join("/"),
        });
      }
    }
    setBreadcrumbs(tempBreadcrumpItems);
  }, [location]);


  return location.pathname === "/" ? (
    ""
  ) : (
    <Breadcrumbs separator={">"} aria-label="breadcrumb" className="breadcrumb">
      <Link className="breadcrumb-link" to={`/`}>
        Home
      </Link>
      ;
      {breadcrumbs.map((item) => {
        return (
          <Link className="breadcrumb-link" to={`/${item.link}`}>
            {item.name}
          </Link>
        );
      })}
      {/* <a color="inherit" href="/">
      Material-UI
    </a>
    <a
      color="inherit"
      href="/getting-started/installation/"
   
    >
      Core
    </a> */}
      {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
    </Breadcrumbs>
  );
};
export default Breadcrumb;
