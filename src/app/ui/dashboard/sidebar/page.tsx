import styles from './sidebar.module.css'
import { MdDashboard, MdFormatListBulletedAdd, MdLiveTv } from 'react-icons/md';
import { LuBook } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessageAltDetail } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import { RiBriefcase4Fill } from "react-icons/ri";
import { Varta } from 'next/font/google';
import Menulink from './menulink/page';




const menuItems = 
[
    {
        title: "Pages",
        list:
        [
            {
                title: "Dashboard",
                path: "/dashboard",
                Icon: <MdDashboard/>,
            },
            {
                title: "My Course",
                path: "/dashboard/courses",
                Icon: <LuBook/>,
            },
            {
                title: "Resources",
                path: "/dashboard/resources",
                Icon: <MdFormatListBulletedAdd/>,
            },
            {
                title: "My Schedule",
                path: "/dashboard/schedule",
                Icon: <RiBriefcase4Fill/>,
            },
            {
                title: "Messages",
                path: "/dashboard/messages",
                Icon: <BiMessageAltDetail/>,
            },
            {
                title: "Peer-to-Peer Support",
                path: "/dashboard/peertopeersupport",
                Icon: <MdFormatListBulletedAdd/>,
            },
            {
                title: "My Account",
                path: "/dashboard/account",
                Icon: <HiOutlineUser/>,
            },
            {
                title: "Settings",
                path: "/dashboard/settings",
                Icon: <IoSettingsOutline/>,
            },
            {
                title: "Live Class",
                path: "/dashboard/liveclass",
                Icon: <MdLiveTv/>,
            },
        ]    
    }
]

const Sidebar  =()=>{
    return(
        <div className={styles.container}>
            <div className={styles.user}>
                <img src="/logoskaille1.png" alt="" className={styles.userImage} />
                {/* <img src="/noavatar.png" alt="" width="50" height="50" className={styles.userImage} />
                <div className={styles.userDetail}>
                    <span className={styles.userName}>John Doe</span>
                    <span className={styles.userTitle}>Administrator</span>

                </div> */}
            </div>
            <ul className={styles.list}>
                {menuItems.map(cat=>(
                    <li key={cat.title}>
                        {/* <span className={styles.cat}>
                            {cat.title}
                        </span> */}
                        {cat.list.map(item=>(
                            <Menulink item={item} key={item.title}/>
                        ))}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Sidebar