import React from 'react'
import '../components/modal.css'
function Modal(props){


    return (
        <div className="Modal">
            Esto es un modal.
            {props.children}
            <button onClick={props.handleColseClick}>Cerrar</button>
        </div>

    )

}

export default Modal