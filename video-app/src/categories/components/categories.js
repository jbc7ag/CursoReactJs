import React from 'react';
import './categories.css'
import Category from './category';





function Categories (props){

        return (

            <div className="Categories">               
                {
                  
                    props.categories.map((item)=>{

                        return <Category key={item.id} {...item} />
                    
                     })            
                }
      
            </div>
          )
}

 //Exportamos el modulo
 export default Categories

