import { ReactNode } from "react";
import Navbar from "../ui/dashboard/navbar/page";
import Sidebar from "../ui/dashboard/sidebar/page";
import styles from "../ui/dashboard/dashboard.module.css" 
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <></>
    // <div className={styles.container}>
    //   <div className={styles.menu}>
    //     <Sidebar />
    //   </div>
    //   <div className={styles.content}>
    //     <Navbar />
        // {children}
    //   </div>
    // </div>
  );
};

export default Layout;
