import React, { useState } from 'react';
import { SidebarItem } from './SidebarItem';
import styles from '../styles/Sidebar.module.css';

const navigationItems = [
  { 
    text: 'Calendar', 
    icon: 'https://www.svgrepo.com/show/533389/calendar-days.svg', 
    className: styles.calendar 
  },
  { 
    text: 'Conversations', 
    icon: 'https://www.svgrepo.com/show/533266/message-square-lines.svg', 
    className: styles.conversations 
  },
  { 
    text: 'Health Plan', 
    icon: 'https://www.svgrepo.com/show/429896/health-insurance-finance.svg', 
    className: styles.healthPlan 
  },
  { 
    text: 'Profile', 
    icon: 'https://www.svgrepo.com/show/512729/profile-round-1342.svg', 
    className: styles.profile 
  }
];

export const Sidebar = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <nav 
      className={`${styles.sidebar} ${isExpanded ? styles.expanded : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.sidebarContainer}>
        <div className={styles.navigationContainer}>
          {navigationItems.map((item, index) => (
            <SidebarItem
              key={index}
              text={item.text}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </div>
        <SidebarItem
          text="Log out"
          icon="https://www.svgrepo.com/show/334065/log-out.svg"
          className={styles.logOut}
        />
      </div>
    </nav>
  );
};