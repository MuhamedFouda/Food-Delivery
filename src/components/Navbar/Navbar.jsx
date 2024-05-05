import './Navbar.scss'
import {assets} from './../../assets/assets'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export default function Navbar({setShowLogin}) {
    const[menu,setmenu]=useState("home");
    const{getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} className='logo'/></Link>
        <ul className="navbar-menu">
            <Link to={'/'} onClick={()=>setmenu("home")} className={menu==="home"?"aactive":""}>Home </Link>
            <a href='#explore-menu' onClick={()=>setmenu("Menu")} className={menu==="Menu"?"aactive":""}>Menu</a>
            <a href='#appdownload' onClick={()=>setmenu("Mobile-app")} className={menu==="Mobile-app"?"aactive":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setmenu("Contact-us")} className={menu==="Contact-us"?"aactive":""}>Contact-us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=''/>
            <div className="navbar-search-icon">
               <Link to='/cart'><img src={assets.basket_icon}/></Link> 
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}
