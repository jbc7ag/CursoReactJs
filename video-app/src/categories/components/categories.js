import React, {Component} from 'react';
import './categories.css'
import PlayList from '../../playlist/components/playlist';



class Categories extends Component{


    //metodos
    render(){

        console.log(this.props);

        const categories=this.props.data.categories;

        console.log(categories);

        return (

            <div>
                {
                    categories.map((item)=>{

                     return  ( 
                            <div key={item.id} className="Category">
                                   
                                    <div>
                                        <h2 className="Category-title">{item.title}</h2>
                                        <h3  className="Category-description">{item.description}</h3>
                                    </div>
                                    <div>
                                         <PlayList data={item.playlist} />

                                    </div>
                              </div>
                              )



                    })

                }
      
            </div>
          )

    }




}

 //Exportamos el modulo
 export default Categories

