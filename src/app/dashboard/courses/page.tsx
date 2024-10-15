import Link from 'next/link'
import styles from './courses.module.css'
import { PiBookOpen, PiCaretLeftBold, PiCreditCard, PiUser } from 'react-icons/pi'
import Cards from './cards/page'
import Courses from './course/page'
import Engagement from './engagement/page'
import Activity from './activity/page'


const Course =()=>{
    return(
        <div className={styles.container}>
            <div className={styles.back}>
                <div className={styles.backIcon}><PiCaretLeftBold/></div>
                <Link href="/dashboard" className={styles.backTxt}>Go To Dashboard</Link>
            </div>
            <div>
                <Cards/>
            </div>
            <div>
                <Courses/>
            </div>
            <div>
                <Engagement/>
            </div>
            <div>
                <Activity/>
            </div>
        </div>
    )
}

export default Course