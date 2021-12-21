import React, { useState } from 'react';
import { Input, Icon, Button, Notification } from "atomize";
import classes from './Login.module.css';

let userI = '';
let passI = '';
const Nnot = ({ noti, dangerDark }) => {
    return (
        <Notification
            bg="danger700"
            isOpen={dangerDark}
            onClose={() => noti(false)}
            prefix={
                <Icon
                    name="CloseSolid"
                    color="white"
                    size="18px"
                    m={{ r: "0.5rem" }}
                />
            }
        >
            Username Or Password Invalid
        </Notification>
    )
}
const handleUserInput = (e) => {
    userI = e.target.value;
}
const handlePassInput = (e) => {
    passI = e.target.value;
}
const checkData = (Rchange, noti) => {
    if (userI === "shadow" && passI === "shadow") {
        userI = ""
        passI = ""
        Rchange("Room")
    }
    else {
        noti(true);
    }
}
const Login = ({ RouteChangers }) => {
    const [showPassword, showPW] = useState(false);
    const [dangerDark, noti] = useState(false);

    return (
        <div className={classes.containerLogin}>
            <h1>Lets Sign In</h1>
            <h2>Welcome Back</h2>
            <div className={classes.LoginBox}>
                <div className={classes.Login}>
                    <Input
                        placeholder="User Name"
                        p={{ x: "2.5rem" }}
                        textWeight="100"
                        onChange={handleUserInput}
                        prefix={
                            <Icon
                                name="UserSolid"
                                color="warning800"
                                size="16px"
                                cursor="pointer"
                                pos="absolute"
                                top="50%"
                                left="0.75rem"
                                transform="translateY(-50%)"
                            />
                        }
                    />
                </div>
                <div className={classes.Login}>
                    <Input
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        onChange={handlePassInput}
                        suffix={
                            <Button
                                pos="absolute"
                                onClick={() => showPW(!showPassword)}
                                bg="transparent"
                                w="3rem"
                                right="0"
                                cursor="pointer"
                                top="50%"
                                transform="translateY(-50%)"
                                rounded={{ r: "md" }}
                            >
                                <Icon
                                    name={showPassword ? "EyeSolid" : "Eye"}
                                    color={showPassword ? "danger800" : "success800"}
                                    size="16px"
                                />
                            </Button>
                        }
                    />
                </div>
                <div className={classes.LoginBtn}>
                    <Button
                        suffix={
                            <Icon
                                name="LongRight"
                                size="16px"
                                color="white"
                                m={{ l: "0.6rem" }}
                            />
                        }
                        shadow="3"
                        hoverShadow="4"
                        bg="black800"
                        hoverBg="black500"
                        m={{ r: "0.06rem" }}
                        // onClick={() => RouteChangers("Room")}
                        onClick={() => checkData(RouteChangers, noti)}

                    >
                        Login
                    </Button>
                    <Button
                        shadow="3"
                        hoverShadow="4"
                        bg="black800"
                        hoverBg="black500"
                        p={{ r: "1.5rem", l: "1rem" }}
                        maxW="95.5px"
                    >
                        Register
                    </Button>
                    <Nnot noti={noti} dangerDark = {dangerDark} />
                </div>
            </div>
        </div>
    )
}

export default Login;
