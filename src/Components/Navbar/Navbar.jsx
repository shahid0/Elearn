// import { Icon } from "atomize";
import classes from './Navbar.module.css'

const Navbar = ({ RouteChangers }) => {

    return (
        <>
        <div className={classes.topN}>
            <h1>E-Learn</h1>
            <button className={classes.button1} onClick={ ()=> RouteChangers("Login")}>Sign In</button>
            <button className={classes.button2}>Sign Up</button>

        </div>
        </>
    );

}

export default Navbar;