import React from 'react';
import { Header } from '../components/headerPlan';
import { CarePlan } from '../components/CarePlan';
import styles from '../styles/CarePlanPage.module.css';

export function CarePlanPage() {
  return (
    <div className={styles.container}>
      <Header />
      <CarePlan />
    </div>
  );
}