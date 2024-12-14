import React from 'react';
import styles from '../styles/sidebarPlan.module.css';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f559448d874e5fcacfe26ecbcd178903e76a870c17ef3f9ae64197d0b8e2d5d?placeholderIfAbsent=true&apiKey=d2ac4fb96ce344968b1acc81903854b2"
          className={styles.sidebarIcon}
          alt=""
        />
      </div>
    </div>
  );
}