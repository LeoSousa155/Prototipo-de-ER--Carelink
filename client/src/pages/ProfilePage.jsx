import React from 'react';
import { Header } from '../components/Header';
import { PersonalDetailsForm } from '../components/PersonalDetailsForm';
import styles from '../styles/ProfilePage.module.css';

export function ProfilePage() {
  return (
    <div className={styles.settingsPage}>
      <div className={styles.pageWrapper}>
      < Header />
        <div className={styles.contentContainer}>
          <div className={styles.layout}>
            <div className={styles.mainColumn}>
              <PersonalDetailsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}