'use client';

import { sendChatService } from '@/app/services/chat-service';
import { ChatFormSchema, chatFormSchema, User } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Card, CardContent, CardTitle } from './ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form';
import { Label } from './ui/label';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { Textarea } from './ui/textarea';

export default function ChatForm({ user }: { user: User }) {
  const [chat, setChat] = useState<{ you: string; server: string }[]>([]);
  const hookForm = useForm<ChatFormSchema>({
    resolver: zodResolver(chatFormSchema),
    defaultValues: {
      message: ''
    }
  });

  async function onSubmit(formData: ChatFormSchema, user: User) {
    const { data, success } = await sendChatService(
      {
        message: formData.message,
        userId: user.id
      },
      user.name
    );

    if (success) {
      hookForm.reset();
      toast.success('Mensagem enviada com sucesso!', {
        position: 'bottom-center'
      });
    } else {
      toast.error('Erro ao enviar mensagem!', {
        position: 'bottom-center'
      });
    }

    setChat((prev) => [
      ...prev,
      {
        you: `You: ${data?.message}`,
        server: `4Blue: ${data?.answer}`
      }
    ]);
  }

  return (
    <Card>
      <CardContent className='space-y-2.5'>
        <CardTitle>Chat 4Blue</CardTitle>
        <Label>Usuário Ativo: {user.name}</Label>
        <ScrollArea className='h-64 border rounded-md p-2 mb-4'>
          {chat.map((message, index) => (
            <React.Fragment key={index}>
              <p className='mb-2 text-sm'>{message.you}</p>
              <p className='mb-2 text-sm'>{message.server}</p>
              <Separator />
            </React.Fragment>
          ))}
        </ScrollArea>
        <Form {...hookForm}>
          <form
            onSubmit={hookForm.handleSubmit((formData) =>
              onSubmit(formData, user)
            )}
          >
            <FormField
              control={hookForm.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chat</FormLabel>
                  <FormDescription />
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder='Escreva sua mensagem.'
                    />
                  </FormControl>
                  <FormDescription>Description</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              className='my-2.5'
            >
              Enviar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
