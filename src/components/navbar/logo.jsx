import { Link } from 'react-router-dom';
import logoImg from '../../images/kush_logo.png'

const Logo = () => {

    return  <Link to={"/"}><div className="logo">
         
        <img src={logoImg}  alt=""/>
        {/* <div className="text">Adimera</div> */}
    </div></Link>
    
}

export default Logo;