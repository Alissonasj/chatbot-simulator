'use server';

import { Chat, ChatData, ServerDTO } from '@/types';

export async function sendChatService(
  payload: Chat,
  userName: string
): Promise<ServerDTO<ChatData>> {
  const response = await fetch('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ payload, userName })
  });
  const responseData = await response.json();

  return responseData;
}

export async function getAllChatsByUserIdService(
  id: number
): Promise<ServerDTO<ChatData[]>> {
  const response = await fetch(`http://localhost:3000/api/historico/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const responseData = await response.json();

  return responseData;
}
