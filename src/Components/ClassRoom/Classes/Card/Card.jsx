import classes from './Card.module.css'

const Card = ({ sName, sTime, Teacher, vClassesData , RouteChangers }) => {
    return (
        <>
        <div className={`${classes.cardCont} gCont `}
        onClick={() => {
            vClassesData("h1223", Teacher, sName)
            RouteChangers("vPage");
        }
        }   
        >
            <h1>Subject : {sName}</h1>
            <h2>Teacher : {Teacher}</h2>
            <h4>Videos : {sTime}</h4>
        </div>
        </>
    )
}

export default Card;