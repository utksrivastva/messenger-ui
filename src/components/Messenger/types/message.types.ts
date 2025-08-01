export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'friend';
  timestamp: Date;
}