import React from 'react'
import VolumeIC from '../../icons/components/volume'
import '../components/volume.css'


function Volume(props){


    return (

            <button className="Volume">
                <div onClick={props.onclickVolume}>

                        <VolumeIC 
                            size={25}
                            color="white"
                        />

                </div>

            <div className="Volume-range">

                <input type="range"
                  min={0}
                  max={1}
                  step={.05}
                  onChange={props.onChangeVolume}
            
                />

            </div>
                        
           
                 
            
             </button>
    )
}

export default Volume