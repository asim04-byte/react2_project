import React, {  useState } from 'react';
import './navbar.css'
import { Link} from 'react-router-dom'
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
 

const NavbarComponent = ({isAuthenticated}) => {
  
    const [menu,SetMenu]=useState("");
    
    const username = localStorage.getItem('username');
    const navigate = useNavigate();
   
  return (
    <>
 {  isAuthenticated ? (<div className='nav_bar'>
    <div className="nav_container">
        <div className="nav_left">
           <div className='brand'>
           <div  >
         
           </div>
            <p className="name">SHOPPER</p>
            </div>
            <ul className="nav_menu">
                    <li onClick={()=>{SetMenu("shop")}}><Link style={{textDecoration:"none" ,color:'#ddd'}}  
                    to={"/latest"}>shop</Link> {menu==="shop"?<hr />:null} </li>
                    <li onClick={()=>{SetMenu("mens")}}><Link style={{textDecoration:"none",color:'#ddd'}} to={"/men"}>Mens</Link>{menu==="mens"?<hr />:null}</li>
                    <li onClick={()=>{SetMenu("womens")}}><Link style={{textDecoration:"none",color:'#ddd'}} to={"/womens"}>Womens</Link> {menu==="womens"?<hr />:null} </li>
                    <li onClick={()=>{SetMenu("kids")}}><Link style={{textDecoration:"none",color:'#ddd'}} to={"/kids"}>Kids</Link>  {menu==="kids"?<hr />:null}</li>                   
                 </ul>
           </div>
        <div className='right_nav'>
            <div className="user">
            <span><FaUser/></span>
              <p>{username}</p>
              
            </div>
           
        </div>
    </div>
    
    
    
    </div>): null}
    </>
  )
}

export default NavbarComponent;