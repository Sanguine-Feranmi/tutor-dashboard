import Link from 'next/link'
import styles from '../courses.module.css'
import { PiBookOpen, PiCaretLeftBold, PiCreditCard, PiUser } from 'react-icons/pi'
import { SlBookOpen, SlPieChart } from 'react-icons/sl'
import { TbChartPieFilled } from 'react-icons/tb'
import { FcStatistics } from 'react-icons/fc'

const Cards = ()=>{
    return(
        <>
            <div className={styles.cards}>
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
            </div>
        </>
    )
}
export default Cards