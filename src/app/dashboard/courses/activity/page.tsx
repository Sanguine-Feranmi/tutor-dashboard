import Image from "next/image"
import styles from "./activity.module.css"
import { MdBook } from "react-icons/md"

const Activity = ()=>{
    return (
        <>
            <div className={styles.actSect}>
                <div className={styles.title}>
                    <h1>Recent Activity</h1>
                </div>
                <div className={styles.actHead}>
                    <div className={styles.name}>
                        <h1>Name</h1>
                    </div>
                    <div className={styles.course}>
                        <p>Course Location</p>
                        <h1>View All</h1>
                    </div>
                </div>
                <div className={styles.acts}>
                    <div className={styles.act}>
                        <div className={styles.name}>
                            <div className={styles.icons}>
                                <MdBook className={styles.icon}/>
                            </div>
                            <div className={styles.text}>
                                <h1>Submission of Design Principles Assignment</h1>
                                <p>20 January, 09:08pm</p>
                            </div>
                        </div>
                        <div className={styles.course}>
                            <div className={styles.loc}>
                                <p>Course 1</p>
                            </div>
                            <div className={styles.view}>
                                <button>View</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.act}>
                        <div className={styles.name}>
                            <div className={styles.icons}>
                                <MdBook className={styles.icon}/>
                            </div>
                            <div className={styles.text}>
                                <h1>Submission of Design Principles Assignment</h1>
                                <p>20 January, 09:08pm</p>
                            </div>
                        </div>
                        <div className={styles.course}>
                            <div className={styles.loc}>
                                <p>Course 1</p>
                            </div>
                            <div className={styles.view}>
                                <button>View</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.act}>
                        <div className={styles.name}>
                            <div className={styles.icons}>
                                <MdBook className={styles.icon}/>
                            </div>
                            <div className={styles.text}>
                                <h1>Submission of Design Principles Assignment</h1>
                                <p>20 January, 09:08pm</p>
                            </div>
                        </div>
                        <div className={styles.course}>
                            <div className={styles.loc}>
                                <p>Course 1</p>
                            </div>
                            <div className={styles.view}>
                                <button>View</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.act}>
                        <div className={styles.name}>
                            <div className={styles.icons}>
                                <MdBook className={styles.icon}/>
                            </div>
                            <div className={styles.text}>
                                <h1>Submission of Design Principles Assignment</h1>
                                <p>20 January, 09:08pm</p>
                            </div>
                        </div>
                        <div className={styles.course}>
                            <div className={styles.loc}>
                                <p>Course 1</p>
                            </div>
                            <div className={styles.view}>
                                <button>View</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.act}>
                        <div className={styles.name}>
                            <div className={styles.icons}>
                                <MdBook className={styles.icon}/>
                            </div>
                            <div className={styles.text}>
                                <h1>Submission of Design Principles Assignment</h1>
                                <p>20 January, 09:08pm</p>
                            </div>
                        </div>
                        <div className={styles.course}>
                            <div className={styles.loc}>
                                <p>Course 1</p>
                            </div>
                            <div className={styles.view}>
                                <button>View</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.act}>
                        <div className={styles.name}>
                            <div className={styles.icons}>
                                <MdBook className={styles.icon}/>
                            </div>
                            <div className={styles.text}>
                                <h1>Submission of Design Principles Assignment</h1>
                                <p>20 January, 09:08pm</p>
                            </div>
                        </div>
                        <div className={styles.course}>
                            <div className={styles.loc}>
                                <p>Course 1</p>
                            </div>
                            <div className={styles.view}>
                                <button>View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Activity