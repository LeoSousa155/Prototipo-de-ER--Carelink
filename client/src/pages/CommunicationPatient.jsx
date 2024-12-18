import React, { useState } from 'react';
import styles from '../styles/ChatLayout.module.css';
import { ConversationList } from '../components/ConversationList';
import { ChatWindow } from '../components/ChatWindow';
import { Header } from '../components/Header';


export function ChatLayoutOld() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.mainContent}>
        
        <ConversationList />
        <ChatWindow />
        
        
      </div>
    </div>
  );
}

export function ChatLayoutPatient() {
  // State to track the selected conversation
  const [selectedChat, setSelectedChat] = useState(null);

  // Sample data for conversations
  const conversations = [
    { id: 1, name: "Dr. Maurício Santos", status: "Online", avatar: '/imagesChat/doctor1.jpeg' },
    { id: 2, name: "Nurse Sarah", status: "Offline", avatar: '/imagesChat/Nurse1.jpg'},
    { id: 3, name: "Dr. Person", status: "Online", avatar: '/imagesChat/Doctor2.jpg'},
    { id: 4, name: "Dr. Smith", status: "Offline", avatar: '/imagesChat/Doctor4.jpeg'},
  ];


  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.mainContent}>
        {/* Conversation/socket */}
      <ConversationList
        conversations={conversations}
        onSelectConversation={setSelectedChat}
      />

      {/* Conversation/socket */}
      <ChatWindow conversation={selectedChat} />
        
      </div>
    </div>
  );
}
