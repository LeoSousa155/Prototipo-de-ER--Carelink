import React from 'react';
import styles from '../styles/ChatWindow.module.css';


export function ChatWindow({ conversation }) {
  if (!conversation) {
      return <div className={styles.container}><div className={styles.chatContentStart}>
        <p id={styles.startChatting}>Select a conversation to start chatting.</p></div>
    </div>
   
  }

  return (

    <div className={styles.container}>
      <div className={styles.header}>
        <img
                  loading="lazy"
                  src={conversation.avatar}
                  className={styles.conversationAvatar}
                  alt={`${conversation.name}'s avatar`}
        />
        <div style={{flexDirection:'column'}}>
          <div className={styles.recipientName}>{conversation.name}</div>
          <div className={styles.status}>{conversation.status}</div>

        </div>
        
      </div>

      <div className={styles.chatContent}>
        <textbox></textbox>
      </div>
      
      <div className={styles.messageInput}>
        <div className={styles.inputWrapper}>
          <div style={{width: '60%'}}><input type= 'text' className={styles.textInput} placeholder='Send a message'/></div>
          <input type='submit' value='Send' class={styles.sendIcon}/>
        </div>
      </div>
          
    </div>
  );
}

