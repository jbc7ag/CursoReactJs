import React from 'react'
import '../components/modal.css'
function Modal(props){


    return (
        <div className="Modal">
            {props.children}
            <button className="Modal-close"
                    onClick={props.handleColseClick}/>
        </div>

    )

}

export default Modal