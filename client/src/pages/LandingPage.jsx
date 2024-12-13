import React from 'react';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { VideoConsultation } from '../components/VideoConsultation';
import styles from '../styles/LandingPage.module.css';

export function LandingPage() {
  return (
    <main className={styles.landingPage}>
      <header className={styles.header}>
        <Logo />
        <Navigation />
      </header>
      <Hero />
      <VideoConsultation />
    </main>
  );
}