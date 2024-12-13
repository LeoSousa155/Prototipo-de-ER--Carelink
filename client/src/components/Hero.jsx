import React from 'react';
import styles from '../styles/Hero.module.css';

export function Hero() {
  return (
    <section className={styles.heroSection}>
    <h1 className={styles.heroTitle}>
    
    Cuidados de saúde na palma da sua mão
    </h1>
    <p className={styles.heroSubtitle}>
    Conectando Você à Saúde, Onde e Quando Precisar
    </p>
    </section>
  );
}