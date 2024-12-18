import React from 'react';
import { HeaderDr } from '../../components/doctor/HeaderDr';
import { PersonalDetailsFormDr } from '../../components/doctor/PersonalDetailsFormDr';
import styles from '../../styles/ProfilePage.module.css';

export function ProfilePageDr() {
  return (
    <div className={styles.settingsPage}>
      <div className={styles.pageWrapper}>
      < HeaderDr />
        <div className={styles.contentContainer}>
          <div className={styles.layout}>
            <div className={styles.mainColumn}>
              <PersonalDetailsFormDr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}