import SideBar from "./SideBar/SideBar"
import classes from './Room.module.css'

const Room = ({vClassesData , RouteChangers}) => {
    return (
        <div className={classes.Cont}>
            <SideBar vClassesData={vClassesData} RouteChangers={RouteChangers} />
        </div>
    )
}

export default Room;