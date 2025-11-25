import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users_table', {
  id: int().primaryKey({ autoIncrement: true }).notNull(),
  userName: text('user_name').notNull()
});
