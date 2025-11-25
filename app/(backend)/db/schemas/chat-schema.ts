import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const chatsTable = sqliteTable('chats_table', {
  id: int().primaryKey({ autoIncrement: true }).notNull(),
  message: text().notNull(),
  userId: int('user_id').notNull(),
  answer: text()
});
