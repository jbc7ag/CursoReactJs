//import React from 'react';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css'

class Media extends Component{

    //Constructor de la clase
    //constructor(props){
    //    super(props);
    //    this.handleClick=this.handleClick.bind(this);
    //}
    // handleClick(event){ //Manejamos el eveto click
    //    console.log(event);
    //}
    
    //ES 6
    //constructor(props){

    //    super(props); 
    //    this.state={
    //        author:props.author
    //    }
    // }

    //ES7
    state={

        author:this.props.author
    }


    handleClick = (event) => {
        console.log(this.props.title);  

        this.setState({
            author:'Ricardo'

        });
    }

    render(){ // html del componente UI

        const styles = {
            container:{
                //fontSize:24,
                //backgroundColor:'purple'
                color:'#44546b',
                cursor:'pointer',
                width:260,
                border:'1px solid red'
            }
        }
        return (
            //<div style={styles.container}>
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image" src={this.props.imagen}
                         alt="" 
                         width={260} 
                         height={160}
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.state.author} </p>

                </div>

             </div>

         )//Sintaxis JXS, no es html

    }

}

//validamos las propiedes enviadas
Media.propTypes={

    imagen: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video','audio'])

}

// Por si no envian alguna y es importate
Media.defaultProps = {
    title: 'titulo de respaldo por si no lo envian!'
  }

export default Media;