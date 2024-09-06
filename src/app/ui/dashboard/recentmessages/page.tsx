import styles from "./recentmessages.module.css"
import style from "../notification/notification.module.css"
import Image from "next/image"

const RecentMessages  =()=>{
    return(
        <>
            <div>
                <div className={style.head}>
                    <h2>Recent Messages</h2>
                    <h2>View All</h2>
                </div>
                <div className={styles.msgs}>
                    <div className={styles.msgBox}>
                        <div className={styles.user}>
                            <div className={styles.userImg}>
                                <Image src="/astronaut.png" alt='' width="50" height="50"/>
                            </div>
                            <div className={styles.userName}>
                                <p>Ryan L.</p>
                                <p>Student</p>
                            </div>
                        </div>
                        <div className={styles.message}>
                            <p>Hello Mrs. James, Hope you are well, I wanted...</p>
                        </div>
                        <div className={styles.timeview}>
                            <div className={styles.time}>
                                <p>2hours ago</p>
                            </div>
                            <div className={styles.viewBtn}>
                            <h2>View All</h2>
                            </div>
                        </div>
                    </div>
                    <div className={styles.msgBox}>
                        <div className={styles.user}>
                            <div className={styles.userImg}>
                                <Image src="/astronaut.png" alt='' width="50" height="50"/>
                            </div>
                            <div className={styles.userName}>
                                <p>Ryan L.</p>
                                <p>Student</p>
                            </div>
                        </div>
                        <div className={styles.message}>
                            <p>Hello Mrs. James, Hope you are well, I wanted...</p>
                        </div>
                        <div className={styles.timeview}>
                            <div className={styles.time}>
                                <p>2hours ago</p>
                            </div>
                            <div className={styles.viewBtn}>
                            <h2>View All</h2>
                            </div>
                        </div>
                    </div>
                    <div className={styles.msgBox}>
                        <div className={styles.user}>
                            <div className={styles.userImg}>
                                <Image src="/astronaut.png" alt='' width="50" height="50"/>
                            </div>
                            <div className={styles.userName}>
                                <p>Ryan L.</p>
                                <p>Student</p>
                            </div>
                        </div>
                        <div className={styles.message}>
                            <p>Hello Mrs. James, Hope you are well, I wanted...</p>
                        </div>
                        <div className={styles.timeview}>
                            <div className={styles.time}>
                                <p>2hours ago</p>
                            </div>
                            <div className={styles.viewBtn}>
                            <h2>View All</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentMessages