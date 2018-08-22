import React, {Component} from 'react'
import {createPortal} from 'react-dom'


class ModalContainer extends Component {

    //Metodo de la clase ModalContiner que esta en la 'interfaz' de component
    render(){

        //Que voy a renderizar y donde
        return createPortal(this.props.children,document.getElementById("modal-container"))

    }


}

export default ModalContainer