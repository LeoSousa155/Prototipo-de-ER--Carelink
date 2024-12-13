import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';

export function Navigation() {
  const navigate = useNavigate()

  const navItems = [
    { text: 'Serviços', className: styles.navLink },
    { text: 'Sobre', className: styles.navLink },
    { text: 'Login', className: `${styles.navLink} ${styles.loginButton}`},
  ];

  return (
    <nav className={styles.navigation}>
      {navItems.map((item, index) => (
        <button
          key={index}
          className={item.className}
          tabIndex="0"
          role="button"
          onClick={() => {
            if (item.text === 'Login') {
              navigate('/login'); // Add navigation conditionally
            }
          }}
        >
          {item.text}
        </button>
      ))}
    </nav>
  );
}