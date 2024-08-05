// "use client"
// import Link from 'next/link';
// import styles from './menulink.module.css';
// import { usePathname } from 'next/navigation';

// interface  MenuItem {
//   title: string;
//   path: string;
//   Icon: JSX.Element;
// }

// const Menulinks = ({ item }: { item: MenuItem}) => {
//   const pathname = usePathname();

//   return (
//     <Link href={item.path} passHref className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
//       {item.Icon}
//       {item.title}
//     </Link>
//   );
// };

// export default Menulinks;



"use client";

import Link from 'next/link';
import styles from './menulink.module.css';
import { usePathname } from 'next/navigation';

interface MenuItem {
  title: string;
  path: string;
  Icon: JSX.Element;
}

interface MenulinksProps {
  item: MenuItem;
}

const Menulinks: React.FC<MenulinksProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} passHref className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
      {item.Icon}
      {item.title}
    </Link>
  );
};

export default Menulinks;
