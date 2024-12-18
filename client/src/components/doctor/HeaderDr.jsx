import React, { useState } from 'react';
import styles from '../../styles/Header.module.css';
import { SidebarDr } from './SidebarDr';

export function HeaderDr() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf742c9de0053c50e8ab8e50f1ebef1e03a12d10e4e4547f07db5371d622c9b8?placeholderIfAbsent=true&apiKey=15bfb221e8294fd6942889c3ffb66922"
            className={styles.logoIcon}
            alt="menu icon"
            onClick={toggleSidebar}
            style={{ cursor: 'pointer' }}
          />
          <div className={styles.brandWrapper}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/71234b285dbeda1bb9375eb4e991e2822e0395d66aa159e878cb2178e851bd70?placeholderIfAbsent=true&apiKey=15bfb221e8294fd6942889c3ffb66922"
              className={styles.brandIcon}
              alt=""
            />
            <span className={styles.brandName}>CareLink</span>
          </div>
        </div>
        <div className={styles.userProfile}>
          <img
            loading="lazy"
            src="https://cdn-icons-png.freepik.com/128/10015/10015419.png"
            className={styles.profileImage}
            alt="Patient"
          />
          <div className={styles.userInfo}>
            <div className={styles.userName}>Doutor123</div>
            <div className={styles.userRole}>Doutor</div>
          </div>
        </div>
      </header>
      {isSidebarVisible && <SidebarDr onClose={() => setIsSidebarVisible(false)} />}
    </div>
  );
}