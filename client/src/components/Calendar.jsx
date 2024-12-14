import React from 'react';
import { Header } from './headerCalendar';
import { CalendarGrid } from './calendarGrid';

import styles from '../styles/Calendar.module.css';

export const Calendar = () => {
  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.navigationBar}>
        <button className={styles.prevMonth}>Mês Anterior</button>
        <div className={styles.currentMonth}>AGOSTO</div>
        <button className={styles.nextMonth}>Proximo Mês</button>
      </div>
      <CalendarGrid />
      <div className={styles.eventIndicator}>Consulta com Doutor Mauricio Gigaricio</div>
      <div className={styles.eventIndicator}>Teste de sangue</div>
      <div className={styles.eventIndicator}>Check-Up</div>
    </div>
  );
};