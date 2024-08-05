"use client"
import { usePathname } from "next/navigation"
import styles from "./navbar.module.css";
import { IoCaretDown } from "react-icons/io5";

import { MdNotificationsNone, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md"



const Navbar  =()=>{
    const pathname = usePathname();
    return(
        <div className={styles.container}>
            <div >
                <h1 className={styles.title}>
                   Your <span className={styles.dash}> {pathname.split("/").pop()} </span> Today!
                </h1>
                <p className={styles.dasht}>Hello Tutor Reina, Welcome back!</p>
            </div>
                <div className={styles.menu}>
                    <div className={styles.language}>
                        <p className={styles.langChose}>Language : English <span className={styles.langflag}> <img src="/usflag.png"  width="50" height="50"/> </span> <IoCaretDown/> </p>
                    </div>
                    <div className={styles.icon}>
                        <MdNotificationsNone/>
                    </div>
                    <div className={styles.user}>
                        <img src="/noavatar.png" alt="" width="60" height="60"className={styles.userImage} />
                    </div>
                </div>

            
        </div>
    )
}

export default Navbar