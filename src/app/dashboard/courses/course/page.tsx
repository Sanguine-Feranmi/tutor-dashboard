import styles from './course.module.css'

const Courses = ()=>{
    return(
        <>
            <div className={styles.cardContainer}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <div className={styles.ctText}>
                                <p className={styles.ctP1}>Course 1: Crafting Engaging Virtual Experiences</p>
                            </div>
                        </div>
                        <div className={styles.cardBottom}>
                            <div className={styles.cardMeterBox}>
                                <div className={styles.meterTxt}>
                                    <p>Avaerage Grade</p>
                                </div>
                                <div className={styles.container}>
                                    <div className={styles.progress}>
                                        <span className={styles.title} data-from="0" data-to="85" data-speed="1800">85</span>
                                        <div className={styles.overlay}></div>
                                        <div className={styles.left}></div>
                                        <div className={styles.right}></div>
                                    </div>
                                </div>
                                <div className={styles.meterbottom}>
                                    <div className={styles.status}>
                                        <p>Status: <span>Excellent</span></p>
                                    </div>
                                    <div className={styles.button}>
                                        <button className={styles.btn}>View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <div className={styles.ctText}>
                                <p className={styles.ctP1}>Course 1: Crafting Engaging Virtual Experiences</p>
                            </div>
                        </div>
                        <div className={styles.cardBottom}>
                            <div className={styles.cardMeterBox}>
                                <div className={styles.meterTxt}>
                                    <p>Avaerage Grade</p>
                                </div>
                                <div className={styles.container}>
                                    <div className={styles.progress}>
                                        <span className={styles.title} data-from="0" data-to="85" data-speed="1800">85</span>
                                        <div className={styles.overlay}></div>
                                        <div className={styles.left}></div>
                                        <div className={styles.right}></div>
                                    </div>
                                </div>
                                <div className={styles.meterbottom}>
                                    <div className={styles.status}>
                                        <p>Status: <span>Excellent</span></p>
                                    </div>
                                    <div className={styles.button}>
                                        <button className={styles.btn}>View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <div className={styles.ctText}>
                                <p className={styles.ctP1}>Course 1: Crafting Engaging Virtual Experiences</p>
                            </div>
                        </div>
                        <div className={styles.cardBottom}>
                            <div className={styles.cardMeterBox}>
                                <div className={styles.meterTxt}>
                                    <p>Avaerage Grade</p>
                                </div>
                                <div className={styles.container}>
                                    <div className={styles.progress}>
                                        <span className={styles.title} data-from="0" data-to="85" data-speed="1800">85</span>
                                        <div className={styles.overlay}></div>
                                        <div className={styles.left}></div>
                                        <div className={styles.right}></div>
                                    </div>
                                </div>
                                <div className={styles.meterbottom}>
                                    <div className={styles.status}>
                                        <p>Status: <span>Excellent</span></p>
                                    </div>
                                    <div className={styles.button}>
                                        <button className={styles.btn}>View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <div className={styles.ctText}>
                                <p className={styles.ctP1}>Course 1: Crafting Engaging Virtual Experiences</p>
                            </div>
                        </div>
                        <div className={styles.cardBottom}>
                            <div className={styles.cardMeterBox}>
                                <div className={styles.meterTxt}>
                                    <p>Avaerage Grade</p>
                                </div>
                                <div className={styles.container}>
                                    <div className={styles.progress}>
                                        <span className={styles.title} data-from="0" data-to="85" data-speed="1800">85</span>
                                        <div className={styles.overlay}></div>
                                        <div className={styles.left}></div>
                                        <div className={styles.right}></div>
                                    </div>
                                </div>
                                <div className={styles.meterbottom}>
                                    <div className={styles.status}>
                                        <p>Status: <span>Excellent</span></p>
                                    </div>
                                    <div className={styles.button}>
                                        <button className={styles.btn}>View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Courses