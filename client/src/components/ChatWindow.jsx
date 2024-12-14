import React from 'react';
import styles from './ChatWindow.module.css';

export function ChatWindow() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.doctorName}>Dr. Maurício Gigarício</div>
        <div className={styles.status}>Online</div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8607ecf35d38c07f4f3b1ac8834c4f797a3fef56bb5915e7a7ff3649843208f5?placeholderIfAbsent=true&apiKey=74da0a009ea843f1bead119561e7fcf9"
        className={styles.chatContent}
        alt="Chat conversation history"
      />
      <div className={styles.messageInput}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputSection}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1266f2137df7aa17ec1e1c908f8fb121aec6212517b15fa5ed1517ba77b83a5?placeholderIfAbsent=true&apiKey=74da0a009ea843f1bead119561e7fcf9"
              className={styles.inputIcon}
              alt=""
            />
            <div className={styles.placeholder}>Message Dr. Maurício Gigarício</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a88f9109026e248d3eb8aee66d4807e09fa676a30238d80ba9949c085197daa?placeholderIfAbsent=true&apiKey=74da0a009ea843f1bead119561e7fcf9"
            className={styles.sendIcon}
            alt="Send message"
          />
        </div>
      </div>
    </div>
  );
}