import React, { useState } from 'react'
import VidCard from './VidCard/VidCard';
import classes from './VideosPage.module.css'
import CurrentPage from "../../CurrentPage/CurrentPage";
import VideoPlayerx from './VideoPlayer/VideoPlayer';
import { Icon, Button } from "atomize";

const vids = [{
    thumb: 'https://picsum.photos/500/400?random=2',
    tittle: 'This is just a test tittle for the video so dont mind',
    src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'

},
{
    thumb: 'https://picsum.photos/500/400?random=2',
    tittle: 'This is just a test tittle for the video so dont mind',
    src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
},
{
    thumb: 'https://picsum.photos/500/400?random=2',
    tittle: 'This is just a test tittle for the video so dont mind',
    src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
},
{
    thumb: 'https://picsum.photos/500/400?random=2',
    tittle: 'This is just a test tittle for the video so dont mind',
    src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
}]

const VidPop = ({ sS, state }) => {
    return (
        // onClick={()=> sS(!state)}
        <div className={`${classes.vidPlayer} ${classes.center}`}  >
            <div className={classes.inc} onClick={() => sS(!state)}>
            </div>
            <div className={classes.close}></div>
            <VideoPlayerx />
        </div >
    )
}
const Noti = ({Snoti,noti}) => {
    return (
        <div className={classes.vidPlayer}>
            <div className={classes.inc} onClick={()=> Snoti(!noti)}>
            </div>
            <div className={classes.close}></div>
            <div className={classes.notiCont}>
                <h1>Under Construction</h1>
            </div>

        </div>
    )
}
const VideosPage = ({ classData }) => {
    const { classCode, Teacher, CName } = classData;
    const [state, setstate] = useState(false)
    const [noti, setnoti] = useState(false)
    return (
        <>
            <CurrentPage Cpage="Classes Videos Section" />
            <div className={`${classes.mCont} gCont`}>
                <div className={classes.datCont}>
                    <div className={classes.textCont}>
                        <h2>
                            Class : {CName}
                        </h2>
                        <h2>
                            Teacher Name : {Teacher}
                        </h2>
                        <h3>
                            Class Code : {classCode}
                        </h3>
                    </div>
                    <div>
                    </div>
                </div>
                <div className={`${classes.vidCont} gCont`}>
                    {
                        vids.map((i, x) => <VidCard key={x} thumb={vids[x].thumb} tittle={vids[x].tittle} src={vids[x].src} Sstate={setstate} state={state} />)
                    }
                </div>
                {
                    state ? <VidPop sS={setstate} state={state} /> : ''
                }
                <div className={classes.posB}>
                    <Button
                        h="3.5rem"
                        w="3.5rem"
                        bg="black800"
                        hoverBg="black700"
                        rounded="circle"
                        m={{ r: "1rem" }}
                        shadow="2"
                        hoverShadow="4"
                        onClick={()=>setnoti(!noti)}
                    >
                        <Icon name="NotificationSolid" size="30px" color="white" />
                    </Button>
                </div>
                {
                    noti ? <Noti Snoti={setnoti} noti={noti} /> : ''
                }
            </div>
        </>
    )
}

export default VideosPage;
