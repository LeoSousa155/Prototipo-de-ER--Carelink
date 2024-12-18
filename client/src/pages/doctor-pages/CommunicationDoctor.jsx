import React, { useState } from 'react';
import styles from '../../styles/ChatLayout.module.css';
import { ConversationListDr } from '../../components/doctor/ConversationListDr';
import { ChatWindowDr } from '../../components/doctor/ChatWindowDr';
import { HeaderDr } from '../../components/doctor/HeaderDr';


export function ChatLayoutOld() {
  return (
    <div className={styles.layout}>
      <HeaderDr />
      <div className={styles.mainContent}>
        
        <ConversationListDr />
        <ChatWindowDr />
        
        
      </div>
    </div>
  );
}

export function ChatLayoutDoctor() {
  // State to track the selected conversation
  const [selectedChat, setSelectedChat] = useState(null);

  // Sample data for conversations
  const conversations = [
    { id: 1, name: "Tiago Oliveira", status: "Online", avatar: '/imagesChat/TiagoOliveira.jpg' },
    { id: 2, name: "Joana Rodrigues", status: "Offline", avatar: '/imagesChat/JoanaRodrigues.jpeg'},
    { id: 3, name: "Ricardo Almeida", status: "Online", avatar: '/imagesChat/RicardoAlmeida.jpg'},
    { id: 4, name: "Maria Lopes", status: "Online", avatar: '/imagesChat/MariaLopes.jpg'},
  ];


  return (
    <div className={styles.layout}>
      <HeaderDr />
      <div className={styles.mainContent}>
        {/* Conversation/socket */}
      <ConversationListDr
        conversations={conversations}
        onSelectConversation={setSelectedChat}
      />

      {/* Conversation/socket */}
      <ChatWindowDr conversation={selectedChat} />
        
      </div>
    </div>
  );
}
