import classes from './classes.module.css'
import Card from './Card/Card'
import CurrentPage from '../../CurrentPage/CurrentPage';
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
                <CurrentPage  Cpage="Current Classes"/>
                <div className={`${classes.clist} gCont`}>
                    <ClasList vClassesData={vClassesData} RouteChangers={RouteChangers} />
                </div>
            </div>
        </>
    )
}

export default ClasEs;