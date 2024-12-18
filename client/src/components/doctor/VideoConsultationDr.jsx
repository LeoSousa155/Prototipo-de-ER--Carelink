import React from 'react';
import styles from '../../styles/VideoConsultation.module.css';

export function VideoConsultation() {
  return (
    <section className={styles.consultationSection}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=video_call" />
    <h2 className={styles.consultationTitle}><span className="material-symbols-outlined" style={{fontSize: '80px'}}>video_call</span><br/>Consultas de vídeo</h2>
    <p className={styles.consultationDescription}>
        Conecte-se com médicos por meio de videochamadas de alta qualidade
    </p>
    </section>
  );
}