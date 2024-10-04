import Link from 'next/link'
import styles from './courses.module.css'
import { PiBookOpen, PiCaretLeftBold, PiCreditCard, PiUser } from 'react-icons/pi'
import Cards from './cards/page'
import Courses from './course/page'
import Engagement from './engagement/page'
import Activity from './activity/page'


const Course =()=>{
    return(
        <div>
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

            {/* <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.cardIcon}>
                        <div><PiCreditCard/></div>
                    </div>
                    <div className={styles.cardTxts}>
                        <div className={styles.cardTxt}>Total Earnings</div>
                        <div className={styles.cardRate}>$313.00</div>
                    </div>

                </div>
                <div className={styles.card}>
                    <div className={styles.cardIcon}>
                        <div><SlBookOpen/></div>
                    </div>
                    <div className={styles.cardTxts}>
                        <div className={styles.cardTxt}>Total Courses</div>
                        <div className={styles.cardRate}>4</div>
                    </div>

                </div>
                <div className={styles.card}>
                    <div className={styles.cardIcon}>
                        <div><TbChartPieFilled/></div>
                    </div>
                    <div className={styles.cardTxts}>
                        <div className={styles.cardTxt}>Engagement Rate</div>
                        <div className={styles.cardRate}>87%</div>
                    </div>

                </div>
                <div className={styles.card}>
                    <div className={styles.cardIcon}>
                        <div><PiUser/></div>
                    </div>
                    <div className={styles.cardTxts}>
                        <div className={styles.cardTxt}>Total Learners</div>
                        <div className={styles.cardRate}>150 Learners</div>
                    </div>

                </div>
                <div className={styles.card}>
                    <div className={styles.cardIcon}>
                        <div><FcStatistics/></div>
                    </div>
                    <div className={styles.cardTxts}>
                        <div className={styles.cardTxt}>Your Teacher Rating</div>
                        <div className={styles.cardRate}>97%</div>
                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default Course