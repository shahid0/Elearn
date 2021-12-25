// import classes from './SIdeBar.module.css';
// import { Icon,Button } from "atomize";
// import { useState } from 'react';
import ClasEs from '../Classes/Classes'


// const DeskT = () => {
//     const [sel, PathSel] = useState("Classes")
//     return (
//         <>
//             <div className={classes.cont}>
//                 <h1>
//                     E-Learn
//                 </h1>
//                 <div className={classes.menuC}>
//                     <h6
//                         onClick={() => PathSel("Classes")}
//                         className={sel === "Classes" ? classes.chkd : ""}
//                     >
//                         Classes
//                     </h6 >
//                     <h6
//                         onClick={() => PathSel("Quiz")}
//                         className={sel === "Quiz" ? classes.chkd : ""}
//                     >
//                         Qiuz
//                     </h6>
//                     <h6
//                         onClick={() => PathSel("Assignments")}
//                         className={sel === "Assignments" ? classes.chkd : ""}
//                     >
//                         Assignments
//                     </h6>
//                 </div>
//             </div>
//             <ClasEs />
//         </>

//     )
// }

const SideBar = ({vClassesData , RouteChangers}) => {
    return (
        <>
            {/* <DeskT /> */}
            <ClasEs vClassesData={vClassesData} RouteChangers={RouteChangers} />
        </>
    )
}

export default SideBar;