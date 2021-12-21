import classes from './classes.module.css'
import Card from './Card/Card'
const ClasList = () => {
    const cL = [
        {
            sName : "Biology",
            sTime : "GPJ",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "GPJ",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "GPJ",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "GPJ",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "GPJ",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "GPJ",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "GPJ",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "GPJ",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "GPJ",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "GPJ",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "GPJ",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "GPJ",
            Teacher : "Dr Phil"
        }
    ];
    return (
        <>
        {
            cL.map ((l , i) => <Card key={[i]} sName = {cL[i].sName} sTime = {cL[i].sTime} Teacher = {cL[i].Teacher} />)
        }
        </>
);
}

const ClasEs = () => {
    return (
        <>
            <div className={classes.cont}>
                <h2 className={classes.wel}>
                    <span> Current </span> Classes
                </h2>
                <div className={`${classes.clist} gCont`}>
                    <ClasList />
                </div>
            </div>
        </>
    )
}

export default ClasEs;