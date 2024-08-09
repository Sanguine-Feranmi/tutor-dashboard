import { PiSpeakerHighBold } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import styles from './notification.module.css'


const Notification  =()=>{
    return(
        <div className={styles.notifcation}>
            <div className={styles.head}>
                <h2>Notifications</h2>
                <h2>View All</h2>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <div className={styles.ctText}>
                                <p className={styles.ctP1}>Anouncements <span> <PiSpeakerHighBold/> </span></p>
                                <p>changes to Platform.</p>
                            </div>
                            <div className={styles.cardBar}>
                                <CiMenuKebab/>
                            </div>
                        </div>
                        <div className={styles.cardBottom}>
                            <div className={styles.dismiss}>
                                <p>Dismiss</p>
                            </div>
                            <div className={styles.view}>
                                <button className={styles.btnView}>View</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <div className={styles.ctText}>
                                <p className={styles.ctP1}>Anouncements <span> <PiSpeakerHighBold/> </span></p>
                                <p>changes to Platform.</p>
                            </div>
                            <div className={styles.cardBar}>
                                <CiMenuKebab/>
                            </div>
                        </div>
                        <div className={styles.cardBottom}>
                            <div className={styles.dismiss}>
                                <p>Dismiss</p>
                            </div>
                            <div className={styles.view}>
                                <button className={styles.btnView}>View</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <div className={styles.ctText}>
                                <p className={styles.ctP1}>Anouncements <span> <PiSpeakerHighBold/> </span></p>
                                <p>changes to Platform.</p>
                            </div>
                            <div className={styles.cardBar}>
                                <CiMenuKebab/>
                            </div>
                        </div>
                        <div className={styles.cardBottom}>
                            <div className={styles.dismiss}>
                                <p>Dismiss</p>
                            </div>
                            <div className={styles.view}>
                                <button className={styles.btnView}>View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification