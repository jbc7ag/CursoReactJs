import React, {Component} from 'react'
import RegularError from '../containers/regular-error'


class HandleError extends Component{

    state={

        handleError:false,
    }

    componentDidCatch(error,info){

        //envia este error a un servicio
        this.setState({

            handleError:true
        })
    }

    render(){

        if(this.state.handleError){

            return(
                <RegularError/>
            )
        }

        return this.props.children
        
    }


}

export default HandleError;