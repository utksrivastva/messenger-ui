import type { Friend, ChatData } from '../types';

export const MOCK_FRIENDS: Friend[] = [
  { id: '1', name: 'Utkarsh Srivastava', isOnline: true },
  { id: '2', name: 'John Doe', isOnline: false },
  { id: '3', name: 'Bruce Wayne', isOnline: true },
  { id: '4', name: 'Alfred', isOnline: true },
  { id: '5', name: 'Clark Kent', isOnline: false },
];

export const MOCK_CHAT_DATA: ChatData = {
  '1': [
    { id: '1', text: 'Hey! How are you doing?', sender: 'friend', timestamp: new Date(Date.now() - 3600000) },
    { id: '2', text: 'I\'m doing great! Just working a project.', sender: 'user', timestamp: new Date(Date.now() - 3500000) },
    { id: '3', text: 'That sounds awesome! What kind of project?', sender: 'friend', timestamp: new Date(Date.now() - 3400000) },
  ],
  '2': [
    { id: '1', text: 'Did you see the latest update?', sender: 'friend', timestamp: new Date(Date.now() - 7200000) },
    { id: '2', text: 'Not yet, what\'s new?', sender: 'user', timestamp: new Date(Date.now() - 7100000) },
  ],
  '3': [
    { id: '1', text: 'I just wrapped up my work!', sender: 'friend', timestamp: new Date(Date.now() - 1800000) },
  ],
  '4': [],
  '5': [
    { id: '1', text: 'Thanks for your help yesterday!', sender: 'friend', timestamp: new Date(Date.now() - 86400000) },
    { id: '2', text: 'No problem! Happy to help anytime.', sender: 'user', timestamp: new Date(Date.now() - 86300000) },
  ],
};