import React from 'react';
import { Sidebar } from '../components/sidebarPlan';
import styles from '../styles/CarePlan.module.css';


export function CarePlan() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.title}>
          Plano personalizado de Dora the explorer
          <br/>
        </div>
        <div className={styles.doctor}>
          Doutor: Maurício Gigarício
          <br />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Descrição</div>
          <div className={styles.sectionContent}>
            Deverá tomar o ben-u-ron ao pequeno-almoço caso acorde com dores.
            <br />
            Todos os dias deverá caminhar 3 a 5 km a uma passada não acelerada.
            <br />
          </div>
        </div>
        <div className={styles.medicationSection}>
          <div className={styles.sectionTitle}>Medicação</div>
          <div className={styles.sectionContent}>
            Ben-u-ron 500mg
            <br />
            Stimpack
            <br />
            Voltaren
          </div>
        </div>
        <div className={styles.infoGrid}>
          <div className={styles.infoBox}>
            <div className={styles.infoTitle}>Duração</div>
            <div className={styles.infoContent}>13/10 - 24/11</div>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.infoTitle}>Próxima consulta</div>
            <div className={styles.infoContent}>3/11 - Consultório 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}