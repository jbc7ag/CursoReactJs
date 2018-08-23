import React from 'react'
import './progressbar.css'


function ProgressBar(props){

    return (
        <div className="ProgressBar"> 

            <input
                 type="range"
                 min="0"
                 max={props.duration}
                 value={props.value}
                 onChange={props.handlerOnchangeProgress}
                
            />

        </div>
    );

}

export default ProgressBar;