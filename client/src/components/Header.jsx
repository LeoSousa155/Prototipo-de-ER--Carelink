import React from 'react';
import styles from '../styles/Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf742c9de0053c50e8ab8e50f1ebef1e03a12d10e4e4547f07db5371d622c9b8?placeholderIfAbsent=true&apiKey=15bfb221e8294fd6942889c3ffb66922"
          className={styles.logoIcon}
          alt="CareLink Logo"
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a00d861cdaef3d5f811b828122b8d77d2e1225b7c3c5a43685bb53e4d663e29?placeholderIfAbsent=true&apiKey=15bfb221e8294fd6942889c3ffb66922"
          className={styles.profileImage}
          alt="Profile picture of Dora the explorer"
        />
        <div className={styles.userInfo}>
          <div className={styles.userName}>Dora the explorer</div>
          <div className={styles.userRole}>Patient</div>
        </div>
      </div>
    </header>
  );
}