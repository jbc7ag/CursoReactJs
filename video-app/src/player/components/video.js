import React, {Component} from 'react'
import './video.css'




class Video extends Component{


    toogleplay(){

        this.props.pause? this.video.play() : this.video.pause();
        
    }

    setRef=(element)=>{
        this.video=element;
    }

    componentWillReceiveProps(nextProps){

        nextProps.pause!=this.props.pause? this.toogleplay():""
    }

    render(){

        const{
            handlerOnLoadedMetadata,
            handerOnTimeUpdate,
            handleOnSeking,
            handleOnSeeked

        }=this.props;

           return (
                <div className="Video">
                    <video
                        ref={this.setRef}
                        autoPlay={this.props.autoplay}
                        src={this.props.src}
                        onLoadedMetadata={handlerOnLoadedMetadata}
                        onTimeUpdate={handerOnTimeUpdate}
                        onSeeked={handleOnSeeked}
                        onSeeking={handleOnSeking}
                    />
                </div>
                
            )

    }


}

export default Video;