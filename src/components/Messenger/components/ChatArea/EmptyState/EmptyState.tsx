import React from 'react';
import { User } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center text-gray-500">
      <div className="text-center">
        <User size={64} className="mx-auto mb-4 text-gray-300" />
        <div className="text-xl font-medium">Select a friend to start chatting</div>
      </div>
    </div>
  );
};