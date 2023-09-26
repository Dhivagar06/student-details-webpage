import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {

 return (
   <div>
   

     <nav className="navbar navbar-expand-lg navbar-light">
       <NavLink className="navbar-brand" to="/">
        <img style={{"width" : 25 + '%'} } src="https://t3.ftcdn.net/jpg/02/51/72/24/240_F_251722407_w6NIo76K1m4mJClG1kGtKyhIoAmoGa73.jpg"></img>  
       </NavLink> 
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/create">
             <b>Add The Stutent Details</b>
             </NavLink>
           </li>
         </ul>
       </div> 
     </nav>
   </div>
 );
}