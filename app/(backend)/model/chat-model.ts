import { getRandomMessages } from '@/lib/utils';
import { Chat, ChatData, ServerDTO, UserData } from '@/types';
import { eq } from 'drizzle-orm';
import { db } from '../db/database';
import { chatsTable } from '../db/schemas/chat-schema';
import { usersTable } from '../db/schemas/user-schema';

async function sendChat(
  chat: Chat,
  userName: string
): Promise<ServerDTO<ChatData>> {
  const result = await db
    .insert(chatsTable)
    .values({ ...chat, answer: getRandomMessages(userName) })
    .returning();

  return {
    success: true,
    data: result[0]
  };
}

async function getAllChatsByUserId(id: number): Promise<ServerDTO<ChatData[]>> {
  const result = await db
    .select()
    .from(chatsTable)
    .where(eq(chatsTable.userId, id));

  return {
    success: true,
    data: result
  };
}

async function getOneUserById(id: number): Promise<ServerDTO<UserData>> {
  const result = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id));

  return {
    success: true,
    data: result[0]
  };
}

export const chatModel = {
  sendChat,
  getAllChatsByUserId,
  getOneUserById
};
