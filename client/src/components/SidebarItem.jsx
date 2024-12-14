import React from 'react';
import styles from '../styles/Sidebar.module.css';

export const SidebarItem = ({ text, icon, className, onClick}) => {
  return (
    <div className={`${styles.sidebarItem} ${className}` } onClick={onClick}>
      <img src={icon} alt="" className={styles.itemIcon} />
      <span className={styles.itemText}>{text}</span>
    </div>
  );
};