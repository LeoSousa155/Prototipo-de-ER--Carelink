import React from 'react';
import { Header } from '../components/headerCalendar';
import { Calendar } from '../components/Calendar';
import { Sidebar } from '../components/Sidebar';
import styles from '../styles/CalendarLayout.module.css';

export const CalendarLayout = () => {
  return (
    <div className={styles.calendarContainer}>
      <Header />
      <Calendar />
      <Sidebar />
    </div>
  );
};