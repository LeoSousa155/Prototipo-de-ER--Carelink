import React from 'react';
import styles from '../../styles/ChatWindow.module.css';
import { CarePlanDr } from './CarePlanDr';


export function HealthPlanWindow({ patient }) {
  if (!patient) {
      return <div className={styles.container}><div className={styles.chatContentStart}>
        <p id={styles.startChatting}>Select a patient to see their information.</p></div>
    </div>
   
  }

  return (

    <div className={styles.container}>
      {/*<div className={styles.header}>
        <img
                  loading="lazy"
                  src={patient.avatar}
                  className={styles.conversationAvatar}
                  alt={`${patient.name}'s avatar`}
        />
        <div style={{flexDirection:'column'}}>
          <div className={styles.recipientName}>{patient.name}</div>

        </div>
        
      </div>*/}

      <div className={styles.chatContent}>
        <CarePlanDr patient = {patient}/>
      </div>
          
    </div>
  );
}

