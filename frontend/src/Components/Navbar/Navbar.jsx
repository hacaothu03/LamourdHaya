import React, { useContext, useRef, useState } from "react";    
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assets/dropdown_icon.png'

const Navbar = () => {

        const [menu,setMenu] = useState("shop");
        const{getTotalCartItems} =useContext(ShopContext);
        const menuRef = useRef();

        const dropdown_toggle = (e) =>{
            menuRef.current.classList.toggle('nav-menu-visible');
            e.target.classList.toggle('open');
        }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("animals")}}><Link style={{textDecoration: 'none'}} to ='/animals'>Stuffed Animals</Link>{menu==="animals"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("dolls")}}><Link style={{textDecoration: 'none'}} to = '/dolls'>Dolls</Link>{menu==="dolls"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("tools")}}><Link style={{textDecoration: 'none'}} to = '/tools'>Crochet Tools</Link>{menu==="tools"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} >Logout</button>
                :<Link to='/login'><button>Login</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>

        </div>
    )
}

export default Navbar;