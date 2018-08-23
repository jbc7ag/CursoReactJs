import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories';
import Related from '../components/related'
import ModalContainer from '../../widget/containers/modal';
import Modal from '../../widget/components/modal';
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/container/video-player'


class Home extends Component{

    state={

        modalVisible:false,
      
    }

    handleOpenModal=(event)=>{

        this.setState({

            modalVisible:true,
        });

    }

    handleColseModal=(event)=>{

        this.setState({

            modalVisible:false,
        });

    }

    render() {

            return (
                <HandleError>
                        <HomeLayout>               
                        <Related />
                        <VideoPlayer autoplay={false} />
                        <Categories categories={this.props.data.categories}
                                        handleOpenModal={this.handleOpenModal}
                        />

                            {
                                //Condicional si el  modal es visible o no
                                //Parecida a la operacion ternaria va hacer la instruccion si se cumple la condicion
                                this.state.modalVisible &&             
                            
                                <ModalContainer>
                                    <Modal handleColseClick={this.handleColseModal}>
                                            <h1> Esto es un portality </h1>
                                    </Modal>
                                    
                                </ModalContainer>
                            }
                        </HomeLayout>
                </HandleError>
            );

        }

       
}


export default Home
