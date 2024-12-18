import React from 'react';  // Ensure React is imported
import { HeaderDr } from '../../components/doctor/HeaderDr';  // Import components
import { CalendarDr } from '../../components/doctor/CalendarDr';
import styles from '../../styles/CalendarLayout.module.css';

export const CalendarLayoutDr = () => {
  return (
    <div className={styles.calendarContainer}>
      <HeaderDr />
      <CalendarDr />
    </div>
  );
};
