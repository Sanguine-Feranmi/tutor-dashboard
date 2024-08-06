"use client";

import Link from 'next/link';
import styles from './menulink.module.css';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';

interface MenuItem {
  title: string;
  path: string;
  Icon: ReactElement;
}

const Menulinks = ({ item }: { item: MenuItem }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
      {item.Icon}
      {item.title}
    </Link>
  );
};

export default Menulinks;

