import React from 'react'
import VidCard from './VidCard/VidCard';
import classes from './VideosPage.module.css'

const VideosPage = ({ classData }) => {
    const { classCode, Teacher, CName } = classData;
    return (
        <div className={`${classes.mCont} gCont`}>
            <div className={`${classes.datCont} gCont`}>
                <h1>{CName}</h1>
                <h2>{Teacher}</h2>
                <h3>{classCode}</h3>
            </div>
            <div className={`${classes.vidCont} gCont`}>
                <VidCard />

            </div>

        </div>
    )
}

export default VideosPage;
