import classes from './VidCard.module.css'

const VidCard = ({ thumb, tittle ,Sstate,state }) => {
    return (
        <>
            <div className={classes.cards} onClick={()=> Sstate(!state)}>
                <div className={classes.card}>
                    <img src={thumb} alt='thumb' />
                    <div className={classes.cardBody}>
                        <h2>{tittle}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <h5>By Dr.phil</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VidCard