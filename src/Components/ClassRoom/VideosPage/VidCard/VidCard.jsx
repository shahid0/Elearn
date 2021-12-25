import React from 'react'
import classes from './VidCard.module.css'

const VidCard = () => {
    return (
        <div className={`${classes.vidCont} gCont `}>
            <h1>Subject : Biology</h1>
            <h2>Teacher : Dr.Phil</h2>
            <h4>Videos : 69</h4>
            {/* <img src="https://images.unsplash.com/photo-1548858191-5e007502bf54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
            <h2>Topic</h2>
            <h2>Date of upload</h2> */}
        </div>
    )
}

export default VidCard
