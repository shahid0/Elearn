import classes from './VidCard.module.css'

const VidCard = ({ thumb, tittle}) => {
    return (
        <>
            <div className={classes.cardC1}>
                <div className={classes.cardC2}>
                    <div className={classes.cardC3}>
                        <img src={thumb} alt="" />
                    </div>
                    <h1>{tittle}</h1>
                </div>
            </div>
        </>
    )
}

export default VidCard