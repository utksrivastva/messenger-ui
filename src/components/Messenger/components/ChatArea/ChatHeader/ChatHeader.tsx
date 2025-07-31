import React from 'react';
import type { Friend } from '../../../types';
import { Avatar } from '../../../../ui';

interface ChatHeaderProps {
  friend: Friend;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ friend }) => {
  return (
    <div className="p-4 bg-white border-b border-gray-200 flex items-center space-x-3">
      <Avatar name={friend.name} size="md" isOnline={friend.isOnline} />
      <div>
        <div className="font-medium text-gray-900">{friend.name}</div>
        <div className="text-sm text-gray-500">
          {friend.isOnline ? 'Online' : 'Offline'}
        </div>
      </div>
    </div>
  );
};