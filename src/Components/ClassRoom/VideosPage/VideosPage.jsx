import React from 'react'
import VidCard from './VidCard/VidCard';
import classes from './VideosPage.module.css'

const vids = [{
    thumb: 'https://picsum.photos/1920/1080?random=2',
    tittle: 'This is just a test tittle for the video so dont mind'

},
{
    thumb: 'https://picsum.photos/1920/1080?random=2',
    tittle: 'This is just a test tittle for the video so dont mind'
},
{
    thumb: 'https://picsum.photos/1920/1080?random=2',
    tittle: 'This is just a test tittle for the video so dont mind'
},
{
    thumb: 'https://picsum.photos/1920/1080?random=2',
    tittle: 'This is just a test tittle for the video so dont mind'
}]

const VideosPage = ({ classData }) => {
    // const { classCode, Teacher, CName } = classData;
    return (
        <div className={`${classes.mCont} gCont`}>
            <div className={`${classes.vidCont} gCont`}>
                {
                    vids.map((i, x) => <VidCard key={x} thumb={vids[x].thumb} tittle={vids[x].tittle} dateUploaded={vids[x].dateUploaded} />)
                }
                {/* <VidCard /> */}
            </div>

        </div>
    )
}

export default VideosPage;
