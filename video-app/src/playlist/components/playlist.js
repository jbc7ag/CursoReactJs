import React from 'react';
import './playlist.css'
import Media from './media'


//Va recbir los datos de js. como propiedad
/*
class PlayList extends Component{
    
   
    //Render se ejecuta para regresar el jsx que se quiera mostrar
    render(){
 
        const playlist=this.props.data;
      
        return(
                <div className="Playlist">
                    {
                        playlist.map((item) =>{
                                                return <Media key={item.id} {...item}/> 
                                               })
                    } 
          
                 </div>
         )

    }

}
*/

function PlayList(props){

      //Render se ejecuta para regresar el jsx que se quiera mostrar
     
        const playlist=props.data;
      
        return(
                <div className="Playlist">
                    {
                        playlist.map((item) =>{
                                                return <Media key={item.id} {...item}/> 
                                               })
                    } 
          
                 </div>
         )
}

export default PlayList

