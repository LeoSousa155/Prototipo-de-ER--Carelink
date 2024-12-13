import React from 'react';
import styles from '../CalendarLayout.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf742c9de0053c50e8ab8e50f1ebef1e03a12d10e4e4547f07db5371d622c9b8?placeholderIfAbsent=true&apiKey=195dfc8ba03f4f57aa5bdc2fcc65be43"
          alt=""
          className={styles.logoIcon}
        />
        <div className={styles.brandWrapper}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71234b285dbeda1bb9375eb4e991e2822e0395d66aa159e878cb2178e851bd70?placeholderIfAbsent=true&apiKey=195dfc8ba03f4f57aa5bdc2fcc65be43"
            alt=""
            className={styles.brandIcon}
          />
          <span>CareLink</span>
        </div>
      </div>
      <div className={styles.userProfile}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd941f1ed089e681e415409c4f72b86ea3f2d0ceea0db5c23294246266ae859c?placeholderIfAbsent=true&apiKey=195dfc8ba03f4f57aa5bdc2fcc65be43"
          alt="User profile"
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <div className={styles.userName}>Dora the explorer</div>
          <div className={styles.userRole}>Patient</div>
        </div>
      </div>
    </header>
  );
};