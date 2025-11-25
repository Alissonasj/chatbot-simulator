'use client';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import UserSelect from '@/components/user-select';
import { ChatData, User } from '@/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getAllChatsByUserIdService } from '../services/chat-service';

export default function HistoryPage() {
  const [user, setUser] = useState<User>({
    id: 1,
    name: '4Blue A'
  });
  const [chat, setChat] = useState<ChatData[]>([]);

  useEffect(() => {
    getAllChatsByUserIdService(user.id).then((response) => {
      const { data } = response;
      setChat(data);
    });
  }, [user]);

  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='min-w-1/3 space-y-2.5'>
        <div className='flex justify-between items-center'>
          <UserSelect setFuntionState={setUser} />
          <Link href={'/'}>Vá para Home</Link>
        </div>
        <Card>
          <CardContent className='space-y-2.5'>
            <CardTitle>Histórico do Chat</CardTitle>
            <Label>Usuário Ativo: {user.name}</Label>
            <ScrollArea className='h-64 border rounded-md p-2 mb-4'>
              {chat.length === 0 ? (
                <p className='mb-2 text-sm'>Nenhum chat encontrado</p>
              ) : (
                chat.map((c, index) => (
                  <React.Fragment key={index}>
                    <p className='mb-2 text-sm'>You: {c.message}</p>
                    <p className='mb-2 text-sm'>4Blue: {c.answer}</p>
                    <Separator />
                  </React.Fragment>
                ))
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
