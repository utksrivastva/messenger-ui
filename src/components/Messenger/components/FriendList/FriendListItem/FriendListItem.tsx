import React from 'react';
import type { Friend } from '../../../types';
import { useMessenger } from '../../../hooks';
import { Avatar } from '../../../../ui';

interface FriendListItemProps {
  friend: Friend;
}

export const FriendListItem: React.FC<FriendListItemProps> = ({ friend }) => {
  const { selectedFriendId, setSelectedFriendId, chatData } = useMessenger();

  const getLastMessage = (friendId: string): string => {
    const messages = chatData[friendId] || [];
    if (messages.length === 0) return 'No messages yet';
    const lastMessage = messages[messages.length - 1];
    return lastMessage.text.length > 30 
      ? lastMessage.text.substring(0, 30) + '...' 
      : lastMessage.text;
  };

  return (
    <div
      onClick={() => setSelectedFriendId(friend.id)}
      className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
        selectedFriendId === friend.id ? 'bg-blue-50 border-r-4 border-r-blue-600' : ''
      }`}
    >
      <div className="flex items-center space-x-3">
        <Avatar name={friend.name} size="lg" isOnline={friend.isOnline} />
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-900 truncate">{friend.name}</div>
          <div className="text-sm text-gray-500 truncate">{getLastMessage(friend.id)}</div>
        </div>
      </div>
    </div>
  );
};