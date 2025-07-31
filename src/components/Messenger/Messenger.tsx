import React from 'react';
import { MessengerProvider } from './context';
import { FriendList, ChatArea } from './components';

const MessengerBase: React.FC = () => {
  return (
    <MessengerProvider>
      <div className="flex h-screen bg-gray-100">
        <FriendList />
        <ChatArea />
      </div>
    </MessengerProvider>
  );
};

const Messenger = Object.assign(MessengerBase, {
  Provider: MessengerProvider,
  FriendList: FriendList,
  ChatArea: ChatArea,
});

export default Messenger;