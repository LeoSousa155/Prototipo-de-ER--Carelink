import React, { useEffect } from 'react';
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
      {/*<button className={styles.button} onClick={}>Adicionar Evento</button>*/}
    </div>
  );
};