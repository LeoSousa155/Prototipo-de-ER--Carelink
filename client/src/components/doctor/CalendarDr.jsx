import React from 'react';
import { CalendarGridDr } from './CalendarGridDr';
import styles from '../../styles/Calendar.module.css';

export const CalendarDr = () => {
  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.navigationBar}>
        <button className={styles.prevMonth}>Mês Anterior</button>
        <div className={styles.currentMonth}>AGOSTO</div>
        <button className={styles.nextMonth}>Proximo Mês</button>
      </div>
      <CalendarGridDr />
      {/*<button className={styles.button} onClick={}>Adicionar Evento</button>*/}
    </div>
  );
};