import React from 'react';
import { Send } from 'lucide-react';
import { useMessenger } from '../../../hooks';


export const MessageInput: React.FC = () => {
  const { messageInput, setMessageInput, sendMessage } = useMessenger();

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <div className="flex space-x-3">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={`Type a message`}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={sendMessage}
          disabled={messageInput.trim() === ''}
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};