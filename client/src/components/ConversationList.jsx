import React from 'react';
import styles from './ConversationList.module.css';

const conversations = [
  { id: 1, name: 'Dr. Maurício Gigarício', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f9be626a2bcb2b1f4d9a8f16c3f7195acb3383f53ca451f5c8c39398e525ef93?placeholderIfAbsent=true&apiKey=74da0a009ea843f1bead119561e7fcf9' },
  { id: 2, name: 'Nurse Sarah', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f9be626a2bcb2b1f4d9a8f16c3f7195acb3383f53ca451f5c8c39398e525ef93?placeholderIfAbsent=true&apiKey=74da0a009ea843f1bead119561e7fcf9' },
  { id: 3, name: 'Dr. Eleven', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f9be626a2bcb2b1f4d9a8f16c3f7195acb3383f53ca451f5c8c39398e525ef93?placeholderIfAbsent=true&apiKey=74da0a009ea843f1bead119561e7fcf9' },
  { id: 4, name: 'Greg', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f9be626a2bcb2b1f4d9a8f16c3f7195acb3383f53ca451f5c8c39398e525ef93?placeholderIfAbsent=true&apiKey=74da0a009ea843f1bead119561e7fcf9' }
];

export function ConversationList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Conversations</h2>
      {conversations.map(conversation => (
        <div key={conversation.id} className={styles.conversationItem}>
          <img
            loading="lazy"
            src={conversation.avatar}
            className={styles.conversationAvatar}
            alt={`${conversation.name}'s avatar`}
          />
          <div className={styles.conversationName}>{conversation.name}</div>
        </div>
      ))}
    </div>
  );
}