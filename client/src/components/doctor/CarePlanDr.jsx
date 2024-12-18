import React from 'react';
import stylesCare from '../../styles/CarePlanDr.module.css';
import styles from '../../styles/ChatWindow.module.css';


export function CarePlanDr({patient}) {
  return (
    <div className={stylesCare.container}>
      <div className={stylesCare.content}>
        <div className={stylesCare.title}>
          Plano personalizado de {patient.name}
          <br/>
        </div>
        <div className={stylesCare.doctor}>
          Doutor: Maurício Santos
          <br />
        </div>
        <div className={stylesCare.section}>
          <div className={stylesCare.sectionTitle}>Descrição</div>
          <div className={stylesCare.sectionContent}>
            Deverá tomar o ben-u-ron ao pequeno-almoço caso acorde com dores.
            <br />
            Todos os dias deverá caminhar 3 a 5 km a uma passada não acelerada.
            <br />
          </div>
        </div>
        <div className={stylesCare.medicationSection}>
          <div className={stylesCare.sectionTitle}>Medicação</div>
          <div className={stylesCare.sectionContent}>
            Ben-u-ron 500mg
            <br />
            Stimpack
            <br />
            Voltaren
          </div>
        </div>
        <div className={stylesCare.infoGrid}>
          <div className={stylesCare.infoBox}>
            <div className={stylesCare.infoTitle}>Duração</div>
            <div className={stylesCare.infoContent}>13/10 - 24/11</div>
          </div>
          <div className={stylesCare.infoBox}>
            <div className={stylesCare.infoTitle}>Próxima consulta</div>
            <div className={stylesCare.infoContent}>3/11 - Consultório 3</div>
          </div>
          
        </div>
        <input type='submit' value='Edit Plan' class={styles.sendIcon}/>
      </div>
    </div>
  );
}