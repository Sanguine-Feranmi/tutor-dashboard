import { MdArrowDropDown, MdSchool } from "react-icons/md"
import { FaUsers } from "react-icons/fa6"
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
                <div className={styles.event}>
                    <div className={styles.eventcard}>
                        <div className={styles.head}>
                            <p>Design Thinking/The Areas of UX Design</p>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.iconTxt}>
                                <div className={styles.icon}><MdSchool/> </div>
                                <div className={styles.text}>Lecture</div>
                            </div>
                            <div className={styles.dateTime}>
                                <div className={styles.date}>11/11/2023</div>
                                <div className={styles.time}>10:00 AM(WAT)</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eventcard}>
                        <div className={styles.head}>
                            <p>UX Design Processes/User Research Method</p>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.iconTxt}>
                                <div className={styles.icon}><FaUsers/> </div>
                                <div className={styles.text}>Meeting</div>
                            </div>
                            <div className={styles.dateTime}>
                                <div className={styles.date}>11/11/2023</div>
                                <div className={styles.time}>10:00 AM(WAT)</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eventcard}>
                        <div className={styles.head}>
                            <p>User Journey/Flow-Maps & Interaction Design</p>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.iconTxt}>
                                <div className={styles.icon}><MdSchool/> </div>
                                <div className={styles.text}>Lecture</div>
                            </div>
                            <div className={styles.dateTime}>
                                <div className={styles.date}>11/11/2023</div>
                                <div className={styles.time}>10:00 AM(WAT)</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eventcard}>
                        <div className={styles.head}>
                            <p>Golden Rule of User Inteface Design</p>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.iconTxt}>
                                <div className={styles.icon}><FaUsers/> </div>
                                <div className={styles.text}>Meeting</div>
                            </div>
                            <div className={styles.dateTime}>
                                <div className={styles.date}>11/11/2023</div>
                                <div className={styles.time}>10:00 AM(WAT)</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eventcard}>
                        <div className={styles.head}>
                            <p>User Personas</p>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.iconTxt}>
                                <div className={styles.icon}><FaUsers/> </div>
                                <div className={styles.text}>Meeting</div>
                            </div>
                            <div className={styles.dateTime}>
                                <div className={styles.date}>11/11/2023</div>
                                <div className={styles.time}>10:00 AM(WAT)</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eventcard}>
                        <div className={styles.head}>
                            <p>Design Thinking/ The Areas of UX Design</p>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.iconTxt}>
                                <div className={styles.icon}><MdSchool/> </div>
                                <div className={styles.text}>Lecture</div>
                            </div>
                            <div className={styles.dateTime}>
                                <div className={styles.date}>11/11/2023</div>
                                <div className={styles.time}>10:00 AM(WAT)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rightbar