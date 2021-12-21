import React, { useState } from 'react'
// import { Button, Icon, Text } from 'react-atomize';
// import Particles from 'react-particles-js';
import classes from './Info.module.css'
import img1 from "../../Images/img1.jpg"
import img2 from "../../Images/img2.png"
import img3 from "../../Images/img3.jpg"



const Info = ({ RouteChange }) => {
    const [selectedCountValue, toggleSelectedCount] = useState(img1)
    return (
        <div>

            <div className={classes.Slider}>
                <img className={classes.Slide} src={`${selectedCountValue}`} alt="s" />
                <div className={classes.radio}>
                    <button className={
                        (selectedCountValue === img1) ? classes.chked : ""
                    } onClick={() => toggleSelectedCount(img1)}></button>

                    <button className={
                        (selectedCountValue === img2) ? classes.chked : ""
                    } onClick={() => toggleSelectedCount(img2)}></button>

                    <button className={
                        (selectedCountValue === img3) ? classes.chked : ""
                    } onClick={() => toggleSelectedCount(img3)}></button>
                </div>
            </div>
            <div className={classes.twoBox}>

                <div className={classes.BoxOne}>
                    <div>
                        <h1>Heading</h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi dolor voluptatem consectetur totam dicta, quos nemo fugiat? Cum officia dolorum accusamus, eos perferendis molestiae corrupti optio aliquid vitae doloribus!
                    </div>
                </div>
                <div className={classes.line}></div>
                <div className={classes.BoxSec}>
                    <div>

                        <h1>Heading</h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quaerat, suscipit doloremque corrupti, autem facere ex ad inventore cupiditate iste eveniet voluptate quod asperiores ratione dolores. Minus iure possimus fuga?
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Info;