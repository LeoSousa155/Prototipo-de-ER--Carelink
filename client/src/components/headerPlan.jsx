import React from 'react';
import styles from '../styles/headerPlan.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fffa7b8cb8d849e924730122514f5b19a6a38f3edb38b6ad4510fc7a7081cff9?placeholderIfAbsent=true&apiKey=d2ac4fb96ce344968b1acc81903854b2"
          className={styles.logo}
          alt="Company logo"
        />
        <div className={styles.brandContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71234b285dbeda1bb9375eb4e991e2822e0395d66aa159e878cb2178e851bd70?placeholderIfAbsent=true&apiKey=d2ac4fb96ce344968b1acc81903854b2"
            className={styles.brandIcon}
            alt=""
          />
          <div className={styles.brandName}>CareLink</div>
        </div>
      </div>
      <div className={styles.userContainer}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a00d861cdaef3d5f811b828122b8d77d2e1225b7c3c5a43685bb53e4d663e29?placeholderIfAbsent=true&apiKey=d2ac4fb96ce344968b1acc81903854b2"
          className={styles.userAvatar}
          alt="User profile"
        />
        <div className={styles.userInfo}>
          <div className={styles.userName}>Dora the explorer</div>
          <div className={styles.userRole}>Patient</div>
        </div>
      </div>
    </header>
  );
}