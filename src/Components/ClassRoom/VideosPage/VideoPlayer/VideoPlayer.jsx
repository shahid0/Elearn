import React from 'react'
import VideoPlayer from 'react-video-js-player';
import classes from './VideoPlayer.module.css'

function VideoPlayerx() {
    return (
        <div>
            <VideoPlayer src={"https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"} className={classes.player}/>
        </div>
    )
}

export default VideoPlayerx
