import styles from './engagement.module.css'

const Engagement =()=>{
    return (
        <>
            <div className={styles.engages}>
                <div className={styles.engage}>
                    <div className={styles.engagement}>
                        <div className={styles.head}>
                            <p>Course Engagement Average</p>
                            <p> <span>&#183;</span>Average %</p>
                        </div>
                        <div className={styles.engagements}>
                            <div className={styles.rate}>
                                <div className={styles.rateBg}>
                                    <p>100%</p>
                                    <hr />
                                </div>
                                <div className={styles.rateBg}>
                                    <p>80%</p>
                                    <hr />
                                </div>
                                <div className={styles.rateBg}>
                                    <p>60%</p>
                                    <hr />
                                </div>
                                <div className={styles.rateBg}>
                                    <p>40%</p>
                                    <hr />
                                </div>
                                <div className={styles.rateBg}>
                                    <p>20%</p>
                                    <hr />
                                </div>
                                <div className={styles.rateBg}>
                                    <p>0%</p>
                                    <hr />
                                </div>
                            </div>
                            <div className={styles.overlay}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                </div>
                        </div>
                    </div>
                    <div className={styles.rating}></div>
                </div>
            </div>
        </>
    )
}
export default Engagement