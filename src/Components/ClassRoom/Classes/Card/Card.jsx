import classes from './Card.module.css'
const Card = ({sName, sTime , Teacher}) => {
    return (
        <>
            <div className={`${classes.cardCont} gCont`}>
                <h1 className={"gCont"}>{sName}</h1>
                <h2> <span> Teacher : {Teacher} </span> </h2>
                <h2>Institute : {sTime}</h2>
            </div>
        </>
    )
}

export default Card;