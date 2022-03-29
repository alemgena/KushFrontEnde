import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../utils/url";
import axios from "axios";
import { categorySlice } from "../../slices/category";
import { Link } from "react-router-dom";
import { leftDrawerSlice } from "../../slices/left_drawer";
import { CategoryRounded } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import "./hover.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const KushCategories = () => {
  const downIcon = <FontAwesomeIcon icon={faCaretDown} />;
    const dispatch = useDispatch();
    const categoryActions = categorySlice.actions;
    const leftDrawerActions = leftDrawerSlice.actions;
    const categories = useSelector((state) => state.category.categories);
    useEffect(() => {
   
        axios.get(`${url}user/getAllCatagory`).then(
          (response) => {
            console.log(response)
            dispatch(categoryActions.setCategories(response.data.catagory));
          },
          (error) => {
            console.log(error);
          }
        );
      }, []);
    return <div className="kush-categories">
                <div className="header">
                    All Categories IS
                </div>     
              <selection>
                <div className="content">
                    {categories && categories.map((category) => {
                      return (
                        <div className="category-item">
                          {" "}
                          <div className="dropdow">
  <ul style={{color:'brown',textDecoration:'none'}}>{category.catagory_Name}
  <div className="dropdown-conten">
    
     <li style={{color:'brown'}} ><a href="#">Cattels »</a>
     <ul>
<li style={{color:'brown'}}><a href="#"> Camels »</a>
<ul >
  <li style={{color:'brown', marginLeft: '15px', marginTop:'10px'}} >Sheep</li>
  <li style={{color:'brown', marginLeft: '90px', marginTop:'-25px'}} >Borena </li>
</ul>
</li>
</ul>
     </li>
     <li style={{color:'brown'}} ><a href="#">Chilled Frozen » </a>
     <ul>
  <li style={{marginLeft: '45px', marginTop:'10px'}}>Chilled Mutton</li>
</ul>
     </li>
     <li><a href="#">Beef Omasum »</a></li>
     <li><a href="#">Medicines,vaccines »</a></li>
     <li><a href="#">Coffee,Oil Seeds,Animal feeds »</a></li>
  </div>+
  </ul>
</div>
</div>
);
})}          
 </div>
 </selection>
 </div>
}
export default KushCategories;



