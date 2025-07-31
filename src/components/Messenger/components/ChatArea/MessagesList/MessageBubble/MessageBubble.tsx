import React from 'react';
import type { Message } from '../../../../types';
import { formatTime } from '../../../../utils';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          message.sender === 'user'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-900'
        }`}
      >
        <div className="text-sm">{message.text}</div>
        <div
          className={`text-xs mt-1 ${
            message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
          }`}
        >
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};