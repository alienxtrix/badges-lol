import { render } from '@testing-library/react';
import React from 'react';
import './styles/badgeForm.css'

class BadgeForm extends React.Component{
    //state={};
    // handleChange=(e)=>{
    //     // console.log({value:e.target.value});
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }
    // handleClick=(e)=>{
    //     console.log("his.state")
    // }
    // handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(this.state);
    // }
    render(){
        return(
           <section>
               <form onSubmit={this.handleSubmit} action="">
                   <h2>New Champ</h2>
                   <label for="nombre">
                   <span>Nombre: </span>    
                   <input onChange={this.props.onChange} name="nombre" value={this.props.formValues.nombre} type="text"/>
                   </label>
                   <label for="rol">
                   <span>Rol: </span>    
                   <input onChange={this.props.onChange} name="rol" value={this.props.formValues.rol} type="text"/>
                   </label>
                   <label for="rol">
                   <span>Dificultad: </span>    
                   <input onChange={this.props.onChange} name="dificultad" value={this.props.formValues.difucultad} type="text"/>
                   </label>
                   <label for="rol">
                   <span>Descripción: </span>   
                   <textarea rows={4} onChange={this.props.onChange} name="descripcion" value={this.props.formValues.descripcion} type="textarea"/>
                   </label> 
                   <button onClick={this.handleClick}>Guardar</button>
               </form>
           </section> 
        )
    };
}

export default BadgeForm;