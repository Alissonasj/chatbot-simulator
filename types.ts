import z from 'zod';
import { chatsTable } from './app/(backend)/db/schemas/chat-schema';
import { usersTable } from './app/(backend)/db/schemas/user-schema';

export type User = {
  id: number;
  name: string;
};
export type UserData = typeof usersTable.$inferSelect;

export type Chat = typeof chatsTable.$inferInsert;
export type ChatData = typeof chatsTable.$inferSelect;

export const chatFormSchema = z.object({
  message: z.string().min(1, 'Insira uma mensagem')
});
export type ChatFormSchema = z.infer<typeof chatFormSchema>;

export type ServerDTO<T> = {
  success: boolean;
  data: T;
};
