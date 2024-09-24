import Cards from '../ui/dashboard/card/page'
import styles from '../ui/dashboard/dashboard.module.css'
import Notification from '../ui/dashboard/notification/page'
import Ongoing from '../ui/dashboard/ongoing/page'
import RecentMessages from '../ui/dashboard/recentmessages/page'
import Rightbar from '../ui/dashboard/rightbar/page'
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";


const Dashboard  =()=>{
    return(
        <div className={styles.dash}>
            <div className={styles.wrapper}>
                <div className={styles.menuicon}>
                    <RiMenuUnfoldLine className={styles.Micon}/>
                    {/* <RiMenuFoldLine className={styles.Micon} /> */}
                </div>
                <div className={styles.main}>
                    <div className={styles.cards}>
                        <Cards />
                    </div>
                    <div className={styles.notifications}>
                        <Notification />
                    </div>
                    <div className={styles.ongoing}>
                        <Ongoing/>
                    </div>
                    <div className={styles.ongoing}>
                        <RecentMessages/>
                    </div>
                </div>
                <div className={styles.side}>
                    <Rightbar/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard