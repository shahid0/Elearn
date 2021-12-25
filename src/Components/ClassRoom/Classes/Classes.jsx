import classes from './classes.module.css'
import Card from './Card/Card'
const ClasList = ({ vClassesData , RouteChangers }) => {
    const cL = [
        {
            sName : "Biology",
            sTime : "69",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "69",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "69",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "69",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "69",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "69",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "69",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "69",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "69",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "69",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "69",
            Teacher : "Dr Phil"
        },
        {
            sName : "Biology",
            sTime : "69",
            Teacher : "Dr Phil"
        }
    ];
    return (
        <>
        {
            cL.map ((l , i) => <Card key={[i]} sName = {cL[i].sName} sTime = {cL[i].sTime} Teacher = {cL[i].Teacher} vClassesData={vClassesData} RouteChangers={RouteChangers} />)
        }
        </>
);
}

const ClasEs = ({vClassesData , RouteChangers}) => {
    return (
        <>
            <div className={classes.cont}>
                <h2 className={classes.wel}>
                    <span> Current </span> Classes
                </h2>
                <div className={`${classes.clist} gCont`}>
                    <ClasList vClassesData={vClassesData} RouteChangers={RouteChangers} />
                </div>
            </div>
        </>
    )
}

export default ClasEs;