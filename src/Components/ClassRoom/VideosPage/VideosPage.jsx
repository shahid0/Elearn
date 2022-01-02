import React from 'react'
import VidCard from './VidCard/VidCard';
import classes from './VideosPage.module.css'

const vids = [{
    thumb: 'https://picsum.photos/500/400?random=2',
    tittle: 'This is just a test tittle for the video so dont mind'

},
{
    thumb: 'https://picsum.photos/500/400?random=2',
    tittle: 'This is just a test tittle for the video so dont mind'
},
{
    thumb: 'https://picsum.photos/500/400?random=2',
    tittle: 'This is just a test tittle for the video so dont mind'
},
{
    thumb: 'https://picsum.photos/500/400?random=2',
    tittle: 'This is just a test tittle for the video so dont mind'
}]

const VideosPage = ({ classData }) => {
    const { classCode, Teacher, CName } = classData;
    return (
        <div className={`${classes.mCont} gCont`}>
            <div className={classes.datCont}>
                <div>
                    <h1>Classes Videos Section</h1>
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
            </div>
            <div className={`${classes.vidCont} gCont`}>
                {
                    vids.map((i, x) => <VidCard key={x} thumb={vids[x].thumb} tittle={vids[x].tittle} dateUploaded={vids[x].dateUploaded} />)
                }
            </div>

        </div>
    )
}

export default VideosPage;
