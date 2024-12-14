import React from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { PersonalDetailsForm } from '../components/PersonalDetailsForm';
import styles from '../styles/SettingsPage.module.css';

export function SettingsPage() {
  return (
    <div className={styles.settingsPage}>
      <div className={styles.pageWrapper}>
        <Header />
        <div className={styles.contentContainer}>
          <div className={styles.layout}>
            <div className={styles.sidebarColumn}>
            </div>
            <div className={styles.mainColumn}>
              <PersonalDetailsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}