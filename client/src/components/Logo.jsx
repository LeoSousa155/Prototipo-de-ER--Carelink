import React from 'react';
import styles from '../styles/Logo.module.css';



export function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/77fe8d9723d868db61ebb15e6025c26bc5352418a520415a9e264a8a47c5acd9?placeholderIfAbsent=true&apiKey=15bfb221e8294fd6942889c3ffb66922"
        className={styles.logoImage}
        alt="CareLink Healthcare Logo"
      />
      <div className={styles.logoText}>CareLink</div>
    </div>
  );
}