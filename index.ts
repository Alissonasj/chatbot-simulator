import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { chatsTable } from './app/(backend)/db/schemas/chat-schema';

const db = drizzle(process.env.DB_FILE_NAME!);

async function main() {
  const chat: typeof chatsTable.$inferInsert = {
    id: 1,
    inputText: 'texto',
    userId: 1
  };

  await db.insert(chatsTable).values(chat);
  console.log('New chat created!');

  const chats = await db.select().from(chatsTable);
  console.log('Getting all chats from the database: ', chats);
}

main();
