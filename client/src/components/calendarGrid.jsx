import React, { useEffect, useState } from 'react';
import styles from '../styles/Calendar.module.css';

const WEEKDAYS = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO'];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

export const CalendarGrid = () => {
  const [dados, setDados] = useState([]); // Estado para armazenar os dados
  const [erro, setErro] = useState(null); // Estado para armazenar possíveis erros
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('http://localhost:5000/dadosEvent')
    .then((response) => {
      if(!response.ok){
        throw new Error('`Erro na requisição: ${response.statusText}`');
      }
      
      return response.json();
    })
    .then((data) => {
      console.log(data[0]);
      setDados(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Erro ao buscar dados:', error);
      setErro(error.message);
      setLoading(false);
    })
  }, []);

  if (loading) {
    return <p>Carregando...</p>; // Indicador de carregamento
  }

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
              {dados.map((item) => {
                console.log("teste",item)
                console.log("teste",item)
                console.log(dayIndex)
                console.log(dayNumber)
                return(<div key={dayIndex} className={styles.dateCell}>
                  {dayNumber <= 31 ? dayNumber : ''}<div className ={styles.eventIndicator}>{dayNumber == item.day ? item.subject : ''}</div>
                </div>)
              
              return(<div key={dayIndex} className={styles.dateCell}>
                  {dayNumber <= 31 ? dayNumber : ''}<div className ={styles.eventIndicator}>{dayNumber == dados[0].day ? dados[0].subject : ''}</div>
                </div>)
              let y = dados.length;
              console.log('tamanho',y);
              console.log("dia",dayNumber)
              console.log('dia pretendido:',dados[0].day)
              for(let x = 0;x < y;x++){
                let z = 0
                let d = []
                console.log(typeof("dia",dayIndex))
                console.log('sucesso');
                  console.log(typeof(dayIndex))
                  console.log('sucesso if');
                  console.log(x)
                  d[z] = (<div key={dayIndex} className={styles.dateCell}>
                    {dayNumber <= 31 ? dayNumber : ''}<div className ={styles.eventIndicator}>{dayNumber == dados[x].day ? dados[x].subject : ''}</div>
                  </div>);
                  z++
                
              }
              

            for(let x=0;x>dados.length;x++){
                
            }
                        
                        
                      
                      
                      
              
              
          })}})}
          
          </div>
          
        ))}
      </div>
    </div>
  );
 
};