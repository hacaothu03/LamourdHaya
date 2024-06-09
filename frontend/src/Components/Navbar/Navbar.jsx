import React, { useState } from "react";    
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";

const Navbar = () => {

        const [menu,setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("animals")}}><Link style={{textDecoration: 'none'}} to ='/animals'>Stuffed Animals</Link>{menu==="animals"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("dolls")}}><Link style={{textDecoration: 'none'}} to = '/dolls'>Dolls</Link>{menu==="dolls"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("tools")}}><Link style={{textDecoration: 'none'}} to = '/tools'>Crochet Tools</Link>{menu==="tools"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>

        </div>
    )
}

export default Navbar;