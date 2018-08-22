import React from 'react';
import './playlist.css'
import Media from './media'


function PlayList(props){

      //Render se ejecuta para regresar el jsx que se quiera mostrar     

        return(
                <div className="Playlist">
                
                    {
                        props.playlist.map((item) =>{ return (
                        
                                                                <Media key={item.id} 
                                                                    {...item}
                                                                    handleClick={props.handleOpenModal}
                                                                
                                                                /> 
                                                              )
                                               })
                    } 
                 </div>
         )
}

export default PlayList

