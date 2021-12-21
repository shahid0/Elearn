import { Button, Icon } from "atomize";
import classes from './back.module.css'

const GoBack = ({getBack}) => {
    return (
        <>
            <div className={classes.c}>
                <Button
                    h="50px"
                    w="50px"
                    bg="gray400"
                    hoverBg="gray700"
                    rounded="lg"
                    cursor="pointer"
                    pos="fixed"
                    bottom="10px"
                    onClick={getBack}
                >
                    <Icon name="Back" size="40px"/>
                </Button>
            </div>
        </>
    )
}

export default GoBack;