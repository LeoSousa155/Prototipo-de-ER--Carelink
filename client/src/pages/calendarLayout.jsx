import React from 'react';
import { Header } from '../components/headerCalendar';
import { Calendar } from '../pages/calendar';
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