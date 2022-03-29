import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../utils/url";
import axios from "axios";
import { categorySlice } from "../../slices/category";
import { Link } from "react-router-dom";
import { leftDrawerSlice } from "../../slices/left_drawer";

import '../../css/investment.css';

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const languge = () => {

    return (
        <div className="investpage">

             <div className="investtitle">

                 <h1>Our fattening Goes Here</h1>
             </div>


        </div>
       
    )

}
export default languge;



