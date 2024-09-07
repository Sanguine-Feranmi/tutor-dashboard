import { MdArrowDropDown } from "react-icons/md"
import styles from "./rightbar.module.css"

const Rightbar  =()=>{
    return(
        <div className={styles.right}>
            <div className={styles.rightHead}>
                <p>You have Upcoming Events</p>
                <hr />
            </div>
            <div className={styles.reminder}>
                <p>Reminder</p>
            </div>
            <div className={styles.events}>
                <div className={styles.eventsHead}>
                    <p>Events</p>
                    <p>
                        <MdArrowDropDown/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Rightbar