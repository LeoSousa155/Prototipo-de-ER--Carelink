import React from 'react';
import styles from './ChatLayout.module.css';
import { ConversationList } from './components/ConversationList';
import { ChatWindow } from './components/ChatWindow';

export function ChatLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.brandSection}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/727a53b397d9020375f6c0d0c55178c0b82c6f87633799e65ac33e0af7793366?placeholderIfAbsent=true&apiKey=74da0a009ea843f1bead119561e7fcf9"
            className={styles.logo}
            alt="Company logo"
          />
          <div className={styles.brandWrapper}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a71be5b9a323641d52db8c04502bd07bfb9a57caad4846a64cd4932c63994205?placeholderIfAbsent=true&apiKey=74da0a009ea843f1bead119561e7fcf9"
              className={styles.brandIcon}
              alt=""
            />
            <div className={styles.brandName}>CareLink</div>
          </div>
        </div>
        <div className={styles.userProfile}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a00d861cdaef3d5f811b828122b8d77d2e1225b7c3c5a43685bb53e4d663e29?placeholderIfAbsent=true&apiKey=74da0a009ea843f1bead119561e7fcf9"
            className={styles.avatar}
            alt="User avatar"
          />
          <div className={styles.userInfo}>
            <div className={styles.userName}>Dora the explorer</div>
            <div className={styles.userRole}>Patient</div>
          </div>
        </div>
      </header>
      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarIcon}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7609b789c3dfcf24d3b736386b12e32bb07a95f405543ac446b48d79cd93c85?placeholderIfAbsent=true&apiKey=74da0a009ea843f1bead119561e7fcf9"
              className={styles.sidebarImage}
              alt=""
            />
          </div>
        </aside>
        <ConversationList />
        <ChatWindow />
      </div>
    </div>
  );
}