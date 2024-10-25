import React, {useState, useRef} from 'react'
import video from '../Media/Background-video.mp4'
import './Background.css'
import '../App.css'


const Background = () => {
    const [isPaused, setIsPaused] = useState(true);
    const videoRef = useRef(null);
  
    const togglePlay = () => {
      const video = videoRef.current;
  
      if (video.paused) {
        video.play();
        setIsPaused(false);
      } else {
        video.pause();
        setIsPaused(true);
      }
    };

    return (
        <div className="video-background">
            <video ref={videoRef} autoPlay loop muted onLoad={togglePlay}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    );
}




export default Background