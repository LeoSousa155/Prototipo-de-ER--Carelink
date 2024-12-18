import React, { useState } from 'react';
import styles from '../../styles/PersonalDetailsForm.module.css';


export function PersonalDetailsFormDr() {
    const [isEditable, setIsEditable] = useState(false); // State to toggle edit mode

  // Handler to toggle between edit and save states
  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };
  return (
    <form className={styles.detailsForm}>
      <h2 className={styles.formTitle}>Personal Details</h2>
      
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Name: </label>
        <input
          type="text"
          id="name"
          defaultValue="Doutor123"
          className={styles.input}
          aria-label="Enter your name"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>Phone Number:</label>
        <input
          type="tel"
          id="phone"
          defaultValue="123456789"
          className={styles.input}
          aria-label="Enter your phone number"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email: </label>
        <input
          type="email"
          id="email"
          defaultValue="doctor@gmail.com"
          className={styles.input}
          aria-label="Enter your email"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="address" className={styles.label}>Address: </label>
        <input
          type="text"
          id="address"
          defaultValue = "House"
          className={styles.input}
          aria-label="Enter your address"
        />
      </div>

      {/* Dynamic Button */}
      <button
          type="button"
          onClick={toggleEdit}
          title={isEditable ? "Click to save your changes" : "Click to edit your details"}
          className={styles.editButton}
        >
          {isEditable ? "Save Details" : "Edit Details"}
        </button>
      </form>
      

      
  );
}