import React from 'react'
import '../components/fullscreen.css'
import Fullscreen from '../../icons/components/fullscreen'


const FullScreen=(props)=>(

    <div 
    className="FullScreen" 
    onClick={props.handleFullscreenClick}
    >

           <Fullscreen
            size={20}
            color="white"/>
    </div> 

)


export default FullScreen


