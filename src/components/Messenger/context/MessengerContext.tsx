import { createContext } from 'react';
import type { Friend, ChatData } from '../types';

export interface MessengerContextType {
  friends: Friend[];
  selectedFriendId: string;
  setSelectedFriendId: (id: string) => void;
  chatData: ChatData;
  setChatData: React.Dispatch<React.SetStateAction<ChatData>>;
  messageInput: string;
  setMessageInput: (input: string) => void;
  sendMessage: () => void;
}

export const MessengerContext = createContext<MessengerContextType | null>(null);