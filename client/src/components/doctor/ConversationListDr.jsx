import React from 'react';
import styles from '../../styles/ConversationList.module.css';


export function ConversationListDr({ conversations, onSelectConversation }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Conversations</h2>
      {conversations.map((conversation) => (

        <div key={conversation.id} className={styles.conversationItem} onClick={() => onSelectConversation(conversation)}>
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
