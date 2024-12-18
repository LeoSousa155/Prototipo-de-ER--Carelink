import React from 'react';
import styles from '../../styles/ConversationList.module.css';


export function PatientListDr({ patients, onSelectPatient }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Patients</h2>
      {patients.map((patient) => (

        <div key={patients.id} className={styles.conversationItem} onClick={() => onSelectPatient(patient)}>
        <img
          loading="lazy"
          src={patient.avatar}
          className={styles.conversationAvatar}
          alt={`${patient.name}'s avatar`}
        />
        <div className={styles.conversationName}>{patient.name}</div>
        </div>
      ))}
    </div>
  );
}
