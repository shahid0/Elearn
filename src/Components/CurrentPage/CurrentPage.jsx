import React from 'react'
import classes from './CurrentPage.module.css'

function CurrentPage({Cpage}) {
    return (
        <div>
            <h2 className={classes.wel}>
                     {Cpage}
                </h2>
        </div>
    )
}

export default CurrentPage
