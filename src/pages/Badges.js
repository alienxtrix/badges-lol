import React from 'react';
import Navbar from '../components/Navbar.js';
import Hero from '../images/hero.png';
import './styles/badges.css';

class Badges extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="Badges__container">
                   <h2>ELIGE TU</h2>
                   <h1>CAMPEÓN</h1>
                   <p>Con más de 140 campeones, encontrarás el que se ajuste perfectamente a tu estilo de juego. Domina a uno o domínalos a todos.</p>
               </div>
               <div>
                   <div>
                       
                   </div>
               </div>
            </div>
        )
    }
}
export default Badges;