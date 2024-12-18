import React, { useState } from 'react';
import { SidebarItemDr } from './SidebarItemDr';
import styles from '../../styles/Sidebar.module.css';
import { useNavigate } from 'react-router-dom';

const navigationItems = [
  { 
    text: 'Calendar', 
    icon: 'https://www.svgrepo.com/show/533389/calendar-days.svg', 
    className: styles.calendar,
    route: '/doctor/calendar'
  },
  { 
    text: 'Conversations', 
    icon: 'https://www.svgrepo.com/show/533266/message-square-lines.svg', 
    className: styles.conversations,
    route: '/doctor/communication'
  },
  { 
    text: 'Patients', 
    icon: 'https://www.svgrepo.com/show/429896/health-insurance-finance.svg', 
    className: styles.healthPlan,
    route: '/doctor/health-plan'
  },
  { 
    text: 'Profile', 
    icon: 'https://www.svgrepo.com/show/512729/profile-round-1342.svg', 
    className: styles.profile,
    route: '/doctor/profile'
  }
];

const navigationItemsDoctor = [
  { 
    text: 'Calendar', 
    icon: 'https://www.svgrepo.com/show/533389/calendar-days.svg', 
    className: styles.calendar,
    route: 'doctor/calendar'
  },
  { 
    text: 'Conversations', 
    icon: 'https://www.svgrepo.com/show/533266/message-square-lines.svg', 
    className: styles.conversations,
    route: 'doctor/conversations'
  },
  { 
    text: 'Health Plan', 
    icon: 'https://www.svgrepo.com/show/429896/health-insurance-finance.svg', 
    className: styles.healthPlan,
    route: 'doctor/health-plan'
  },
  { 
    text: 'Profile', 
    icon: 'https://www.svgrepo.com/show/512729/profile-round-1342.svg', 
    className: styles.profile,
    route: 'doctor/profile'
  }
];

export const SidebarDr = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const navigate = useNavigate();

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
            <SidebarItemDr
              key={index}
              text={item.text}
              icon={item.icon}
              className={item.className}
              onClick={() => { navigate(item.route); }}
            />
          ))}
        </div>
        <SidebarItemDr
          text="Log out"
          icon="https://www.svgrepo.com/show/334065/log-out.svg"
          className={styles.logOut}
          onClick={() => { navigate('/logout'); }}
        />
      </div>
    </nav>
  );
};