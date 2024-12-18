import React from 'react';
import styles from '../../styles/PersonalDetailsForm.module.css';

export function PersonalDetailsFormDr() {
  return (
    <form className={styles.detailsForm}>
      <h2 className={styles.formTitle}>Personal Details</h2>
      
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Name: </label>
        <input
          type="text"
          id="name"
          className={styles.input}
          aria-label="Enter your name"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>Phone Number:</label>
        <input
          type="tel"
          id="phone"
          className={styles.input}
          aria-label="Enter your phone number"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email: </label>
        <input
          type="email"
          id="email"
          className={styles.input}
          aria-label="Enter your email"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="address" className={styles.label}>Address: </label>
        <input
          type="text"
          id="address"
          className={styles.input}
          aria-label="Enter your address"
        />
      </div>

      <button type="submit" className={styles.editButton}>
        edit details
      </button>
    </form>
  );
}