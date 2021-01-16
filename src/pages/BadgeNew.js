import React from 'react';
import Navbar from '../components/Navbar.js';
import Hero from '../images/hero.png';
import './styles/badgeNew.css';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';
class BadgeNew extends React.Component{
    state ={
        form:{
            nombre:"",
            rol:"",
            dificultad:""
        }
    };

    handleChange=(e)=>{
        // const nextValue = this.state.form;
        // nextValue[e.target.name]=e.target.value
       this.setState({
           form:{
               ...this.state.form,
                [e.target.name]:e.target.value
               
           }
       })
        
    }
    render(){
        return(
           <main>
               <Navbar/>
               <div className="hero">
                   <img src={Hero} alt=""/>
               </div>
               <div className="container__badge-form">
               <Badge
                name={this.state.form.nombre}
                rol= {this.state.form.rol}
                dificultad={this.state.form.dificultad}
                descripcion={this.state.form.descripcion} />
               <div><BadgeForm 
               onChange={this.handleChange}
               formValues={this.state.form}
               /></div>
               </div>
           </main>
        );
    }
}

export default BadgeNew;