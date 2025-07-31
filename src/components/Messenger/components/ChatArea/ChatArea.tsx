import React from 'react';
import { useMessenger } from '../../hooks';
import { ChatHeader } from './ChatHeader';
import { MessagesList } from './MessagesList';
import { MessageInput } from './MessageInput';
import { EmptyState } from './EmptyState';

export const ChatArea: React.FC = () => {
  const { friends, selectedFriendId, chatData } = useMessenger();
  
  const selectedFriend = friends.find(friend => friend.id === selectedFriendId);
  const currentMessages = chatData[selectedFriendId] || [];

  if (!selectedFriend) {
    return <EmptyState />;
  }

  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader friend={selectedFriend} />
      <MessagesList messages={currentMessages} />
      <MessageInput />
    </div>
  );
};