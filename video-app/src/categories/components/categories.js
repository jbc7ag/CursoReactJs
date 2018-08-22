import React from 'react';
import './categories.css'
import Category from './category';
import Search from '../../widget/containers/search'


function Categories (props){

        return (

            <div className="Categories">
                <Search/>            
                {
                  
                    props.categories.map((item)=>{

                        return(
                             <Category 
                                       key={item.id} 
                                       {...item} 
                                       handleOpenModal={props.handleOpenModal}

                             />
                            )
                    
                     })            
                }
      
            </div>
          )
}

 //Exportamos el modulo
 export default Categories

