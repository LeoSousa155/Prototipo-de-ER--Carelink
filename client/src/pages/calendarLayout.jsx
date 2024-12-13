import React from 'react';
import { Calendar } from './calendar';
import styles from './CalendarLayout.module.css';

export const CalendarLayout = () => {
  return (
    <div className={styles.calendarContainer}>
      <Header />
      <Calendar />
    </div>
  );
};