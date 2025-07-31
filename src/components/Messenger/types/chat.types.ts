import type { Message } from './message.types';

export interface ChatData {
  [friendId: string]: Message[];
}