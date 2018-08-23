import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import formatterTime from '../../utilities/utilities'
import ProgressBar from '../components/progresbar';
import Spinner from '../components/spinner';
import Volume from '../components/volume'



class VideoPlayer extends Component{

    state={

        pause:true,
        duration:0,
        currentTime:0,
        loading:false

    }

    handleTooglePlay=(event)=>{

        this.setState({
            pause: !this.state.pause
        })

    }
    
    componentDidMount(){
        this.setState({

            pause:(!this.props.autoplay)
        })

    }

    handlerOnLoadedMetadata=(event)=>{
        this.video=event.target;

        this.setState({

            duration: this.video.duration,

        })
    }

    handerOnTimeUpdate=(event)=>{

        this.setState({

            currentTime: this.video.currentTime,
        })
    }

    handlerOnchangeProgress=(event)=>{

         this.video.currentTime=event.target.value;

    }

   handleOnSeeked=(event)=>{

        this.setState({

            loading:false
            
        })
   }
   handleOnSeking=(event)=>{
        this.setState({

            loading:true
                
        })

   }



    render(){

        return(
                    
            <VideoPlayerLayout>
               
                <Title title="Soy un video"/> 
                <Spinner
                    active={this.state.loading}
                />    
                <Video
                   pause={this.state.pause}
                   src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                   autoplay={this.props.autoplay}
                   handlerOnLoadedMetadata={this.handlerOnLoadedMetadata}
                   handerOnTimeUpdate={this.handerOnTimeUpdate}
                   handleOnSeeked={this.handleOnSeeked}
                   handleOnSeking={this.handleOnSeking}

                 />
                  <Controls>

                  
                    <PlayPause 
                        pause={this.state.pause}
                        handleClick={this.handleTooglePlay}
                    />
                    <Timer duration={formatterTime(this.state.duration)} currentTime={formatterTime(this.state.currentTime)}/>
                    <ProgressBar
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handlerOnchangeProgress={this.handlerOnchangeProgress}
                    />
                    <Volume />
                </Controls>

            </VideoPlayerLayout>
        );
    }


}

export default VideoPlayer