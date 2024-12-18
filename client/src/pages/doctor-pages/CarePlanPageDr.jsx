import React, { useState } from 'react';
import { HeaderDr } from '../../components/doctor/HeaderDr';
/*import { CarePlanDr } from '../../components/doctor/CarePlanDr';*/
import { PatientListDr } from '../../components/doctor/PatientList';
import { HealthPlanWindow } from '../../components/doctor/HealthPlanWindow';
import styles from '../../styles/CarePlanPage.module.css';
import stylesChat from '../../styles/ChatLayout.module.css';

export function CarePlanPageDrold() {
  return (
    <div className={styles.container}>
      <HeaderDr />
      {/*<CarePlanDr />*/}
      <PatientListDr/>
    </div>
  );
}

export function CarePlanPageDr() {
  // State to track the selected conversation
  const [patient, setPatient] = useState(null);

  // Sample data for conversations
  const patients = [
    { id: 1, name: "Tiago Oliveira", status: "Online", avatar: '/imagesChat/TiagoOliveira.jpg' },
    { id: 2, name: "Joana Rodrigues", status: "Offline", avatar: '/imagesChat/JoanaRodrigues.jpeg'},
    { id: 3, name: "Ricardo Almeida", status: "Online", avatar: '/imagesChat/RicardoAlmeida.jpg'},
    { id: 4, name: "Maria Lopes", status: "Online", avatar: '/imagesChat/MariaLopes.jpg'},
  ];


  return (
    <div className={stylesChat.layout}>
      <HeaderDr />
      <div className={stylesChat.mainContent}>
        {/* Conversation/socket */}
      <PatientListDr
        patients={patients}
        onSelectPatient={setPatient}
      />

      {/* Conversation/socket */}
      <HealthPlanWindow patient={patient} />
        
      </div>
    </div>
  );
}