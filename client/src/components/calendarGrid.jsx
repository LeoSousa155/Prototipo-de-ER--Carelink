import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Calendar.module.css';

const WEEKDAYS = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO'];

export const CalendarGrid = () => {
  const [dados, setDados] = useState([]); // State to store events
  const [erro, setErro] = useState(null); // State to store errors
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    fetch('http://localhost:5000/dadosEvent')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setDados(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
        setErro(error.message);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (erro) {
    return <p>Erro: {erro}</p>;
  }

  // Generate an array of 42 cells (6 weeks x 7 days)
  const calendarCells = Array.from({ length: 42 }, (_, index) => {
    const dayNumber = index + 1 <= 31 ? index + 1 : null; // Ensure days > 31 are empty
    const event = dados.find((item) => item.day === dayNumber); // Find event for the day

    return (
      <div key={index} className={styles.dateCell}>
        {dayNumber && (
          <>
            <span>{dayNumber}</span>
            {event && (
              <div className={styles.eventIndicator}>{event.subject}</div>
            )}
          </>
        )}
      </div>
    );
  });

  

  return (
    <div className={styles.calendarGrid}>
      <div className={styles.table}>
        {/* Render header row with weekdays */}
        <div className={styles.headerRow}>
          {WEEKDAYS.map((day) => (
            <div key={day} className={styles.headerCell}>
              {day}
            </div>
          ))}
        </div>

        {/* Render the 42 cells grouped into rows of 7 */}
        {Array.from({ length: 6 }).map((_, rowIndex) => (
          <div key={rowIndex} className={styles.weekRow}>
            {calendarCells.slice(rowIndex * 7, rowIndex * 7 + 7)}
          </div>
        ))}
      </div>

      {/* Render the "Adicionar Evento" button */}
      <button className={styles.button} onClick={() => { navigate("/calendar/add-event") }}>Adicionar Evento</button>
    </div>
  );
};
