import React from 'react';  // Ensure React is imported
import { Header } from '../components/Header';  // Import components
import { Calendar } from '../components/Calendar';
import styles from '../styles/CalendarLayout.module.css';

export const CalendarLayout = () => {
  return (
    <div className={styles.calendarContainer}>
      <Header />
      <Calendar />
    </div>
  );
};
