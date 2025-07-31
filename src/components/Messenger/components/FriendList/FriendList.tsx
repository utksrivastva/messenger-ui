import React from 'react';
import { useMessenger } from '../../hooks';
import { FriendListItem } from './FriendListItem';

export const FriendList: React.FC = () => {
  const { friends } = useMessenger();

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 bg-blue-600 text-white">
        <h1 className="text-xl font-semibold">Messenger UI</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {friends.map((friend) => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};