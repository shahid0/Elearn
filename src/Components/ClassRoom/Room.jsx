import SideBar from "./SideBar/SideBar"
import classes from './Room.module.css'

const Room = () => {
    return (
        <div className={classes.Cont}>
            <SideBar />
        </div>
    )
}

export default Room;