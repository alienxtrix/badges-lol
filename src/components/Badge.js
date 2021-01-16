import React from 'react';
import lol_logo from '../images/lol_logo.png';
import shaco from '../images/shaco.jpg'
import '..//components/styles/badge.css';

class Badge extends React.Component{
    render(){
        return(
            <section className="Badge">
               <div className="Badge__header"><img src={lol_logo} alt="Logo de lol"/>
               <h2><i>Campeón</i></h2>
               </div>
                <div className="Badge__section-name">
                    <img src={shaco} alt="Shaco" className="Badge__avatar"/>
                    <div>
                        <h2><b>{this.props.name}</b></h2>
                        <h3> {this.props.rol}</h3>
                        <h4>{this.props.dificultad}</h4></div>
                    
                    
                </div>
                <div className="Badge__section-info">
                    <p>{this.props.descripcion}</p>
                </div>
                <div className="Badge__footer">
                    <a href="http://">#shaco</a>
                </div>
            </section>
        )
    }
}

export default Badge;