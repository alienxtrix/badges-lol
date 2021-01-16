import React from 'react';
import logoL from '../images/L.png';
import './styles/navbar.css';

class Navbar extends React.Component{
    render(){
        return(
           <div className="container">
               <a href="#"><img src={logoL} alt="lol image"/></a>
               
               <h3><i>League of legends</i> <b>champions</b></h3>
           </div>
        );
    }

}

export default Navbar;