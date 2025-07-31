import React, { useState } from 'react';
import { MessengerContext } from './MessengerContext';
import type { MessengerContextType } from './MessengerContext';
import type { Message } from '../types';
import { MOCK_FRIENDS, MOCK_CHAT_DATA, FRIEND_RESPONSES } from '../constants';

interface MessengerProviderProps {
  children: React.ReactNode;
}

export const MessengerProvider: React.FC<MessengerProviderProps> = ({ children }) => {
  const [friends] = useState(MOCK_FRIENDS);
  const [selectedFriendId, setSelectedFriendId] = useState<string>('1');
  const [chatData, setChatData] = useState(MOCK_CHAT_DATA);
  const [messageInput, setMessageInput] = useState<string>('');

  const sendMessage = () => {
    if (messageInput.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: messageInput.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setChatData(prev => ({
      ...prev,
      [selectedFriendId]: [...(prev[selectedFriendId] || []), newMessage],
    }));

    setMessageInput('');

    // Simulate friend response after a short delay
    setTimeout(() => {
      const randomResponse = FRIEND_RESPONSES[Math.floor(Math.random() * FRIEND_RESPONSES.length)];
      
      const friendResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'friend',
        timestamp: new Date(),
      };

      setChatData(prev => ({
        ...prev,
        [selectedFriendId]: [...(prev[selectedFriendId] || []), friendResponse],
      }));
    }, 1000 + Math.random() * 2000);
  };

  const contextValue: MessengerContextType = {
    friends,
    selectedFriendId,
    setSelectedFriendId,
    chatData,
    setChatData,
    messageInput,
    setMessageInput,
    sendMessage,
  };

  return (
    <MessengerContext.Provider value={contextValue}>
      {children}
    </MessengerContext.Provider>
  );
};