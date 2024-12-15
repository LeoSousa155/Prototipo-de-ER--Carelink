import React from 'react';
import styles from '../styles/Calendar.module.css';

const WEEKDAYS = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO'];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

export const CalendarGrid = () => {
  return (
    <div className={styles.calendarGrid}>
      <div className={styles.table}>
        <div className={styles.headerRow}>
          {WEEKDAYS.map(day => (
            <div key={day} className={styles.headerCell}>{day}</div>
          ))}
        </div>
        {Array.from({ length: 6 }).map((_, weekIndex) => (
          <div key={weekIndex} className={styles.headerRow}>
            {Array.from({ length: 7 }).map((_, dayIndex) => {
              const dayNumber = weekIndex * 7 + dayIndex + 1;
              if(dayNumber == 1){
                return (
                  <div key={dayIndex} className={styles.dateCell}><div className ={styles.eventIndicator}>Consulta com Doutor Gigarico</div>
                    {dayNumber <= 31 ? dayNumber : ''}
                  </div>
                );
              }
              if(dayNumber == 15){
                return (
                  <div key={dayIndex} className={styles.dateCell}><div className ={styles.eventIndicator}>Analise de Sangue</div>
                    {dayNumber <= 31 ? dayNumber : ''}
                  </div>
                );
              }
              else{
                return (
                  <div key={dayIndex} className={styles.dateCell}>
                    {dayNumber <= 31 ? dayNumber : ''}
                  </div>
                );
              }
              
            })}
          </div>
        ))}
      </div>
    </div>
  );
};