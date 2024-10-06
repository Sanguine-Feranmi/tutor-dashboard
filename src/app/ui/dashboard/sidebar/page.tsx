import styles from './sidebar.module.css'
import { MdDashboard, MdFormatListBulletedAdd, MdLiveTv } from 'react-icons/md';
import { LuBook } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessageAltDetail } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import { RiBriefcase4Fill } from "react-icons/ri";
// import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import Menulink from './menulink/menulink';




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
            // {
            //     title: "My Course",
            //     path: "/dashboard/courses2",
            //     Icon: <LuBook/>,
            // },
            {
                title: "Resourcesss",
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
            {/* <div className={styles.menuicon}>
                <RiMenuUnfoldLine className={styles.Micon}/>
                <RiMenuFoldLine className={styles.Micon} />
            </div> */}
            <div className={styles.user}>
                <img src="/logoskaille1.png" alt="" className={styles.userImage} />
            </div>
            <ul className={styles.list}>
                {menuItems.map(cat=>(
                    <li key={cat.title}>
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
