
import {NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Carousel} from 'react-bootstrap'
import cowsImage from '../../images/cows.png';
import '../../css/kushhomeright.css';
import {useMediaQuery} from 'react-responsive';


const KushHomeRight = () => {

   const verticalLinks = useMediaQuery({ query: "(max-width: 650px)" });

    return <div className="kush-home-right">
  
                    <div className="menu">
                        <div className={verticalLinks ? 'links vertical-links':'links'}>
                            {/* <Link className="link" to='/' >Kush market</Link>
                            <Link className="link" to='/investment' >Investment</Link>
                            <Link className="link" to='/services' >Service</Link>
                            <Link className="link" to='/virtualportals'>Virtual Portals</Link> */}

                            <nav className="navbar navbar-expand-lg navbar-dark bg-">
                                <div className="container-fluid">
                        
                                    <div className="collapse navbar-collapse" id="main_nav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item dropdown">
                                                <div className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Kush Market  </div>
                                                    <ul className="dropdown-menu">
                                                        <li><NavLink className="dropdown-item" to='/latestproducts'>Latest Products</NavLink></li>
                                                    </ul>
                                            </li>

                                            <li className="nav-item dropdown">
                                                <div className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Investment  </div>
                                                <ul className="dropdown-menu">
                                                    <li><NavLink className="dropdown-item" to='/slaughter'>Slaughter House</NavLink> </li>
                                                    <li><NavLink className="dropdown-item" to='/fattening'>Fattening</NavLink></li>
                                                    <li><NavLink className="dropdown-item" to='/pharmaceuticals'>Pharmaceuticals</NavLink></li>
                                                    <li><NavLink className="dropdown-item" to='/minning'>Minning</NavLink></li>
                                                    <li><NavLink className="dropdown-item" to='/realestates'>Real Estates</NavLink></li>
                                                </ul>
                                            </li>

                                            <li className="nav-item dropdown">
                                                <div className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Services  </div>
                                                <ul className="dropdown-menu">
                                                    <li><NavLink className="dropdown-item" to='/shipping'>Shipping Services</NavLink></li>
                                                    <li><NavLink className="dropdown-item" to='/partneragent'>Partner Agent</NavLink></li>
                                                </ul>
                                            </li>

                                            <li className="nav-item dropdown">
                                                <div className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Virtual Portals  </div>
                                                <ul className="dropdown-menu">
                                                    <li><NavLink className="dropdown-item" to='/latestvideo'>Lates Videos</NavLink></li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>

                        </div>
                    </div> 
                

        
         
                <div className="bottom">

                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={cowsImage}
                        alt="First slide"
                        rounded/>
                        <Carousel.Caption>
                        <h3>Welcome to Kush liveStock</h3>
                        <p> <strong> An Ethiopian portal for worldwide livestock industry. This is active livestock 
                        sector for all worldwide livestock sector suppliers, exporters, slaughter houses
                        to give Business opportunities.</strong></p>
                        <Link className="link" to='/register' >
                            <button className="regbutton">
                                <span> Click to Register </span>
                            </button>
                        </Link>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src={cowsImage}
                        alt="Second slide"
                        rounded/>
                        <Carousel.Caption>
                        <h3>Benefit of the Website</h3>
                        <p><strong>Here You'll get a free Advert opportunities. Come and Shine with Us.</strong> </p>
                        <Link className="link" to='/register' >
                            <button className="regbutton">
                                <span>Click to Register </span>
                            </button>
                        </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={cowsImage}
                        alt="Third slide"
                        rounded/>
                        <Carousel.Caption>
                            <h3>Register Here</h3>
                        <Link className="link" to='/register' >
                            <button className="regbutton">
                                <span>Click to Register  </span>
                            </button>
                        </Link>
                      
                    
                        </Carousel.Caption>
                    </Carousel.Item>
                     
                    {/* <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={cowsImage}
                        alt="Third slide"
                        rounded/>
                        <Carousel.Caption>
                        <h3>Kush LiveStock</h3>
                        <p>Buying request form</p>
                    
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
                
            </div>
         
            
            
        </div>
}
export default KushHomeRight;