'use client';

import ChatForm from '@/components/chat-form';
import UserSelect from '@/components/user-select';
import { User } from '@/types';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<User>({
    id: 1,
    name: '4Blue A'
  });

  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='min-w-1/3 space-y-2.5'>
        <div className='flex justify-between items-center'>
          <UserSelect setFuntionState={setUser} />
          <Link href={'/historico'}>Vá para Histórico</Link>
        </div>
        <ChatForm user={user} />
      </main>
    </div>
  );
}
