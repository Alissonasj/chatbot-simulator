import { chatModel } from '@/app/(backend)/model/chat-model';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  const result = await chatModel.getAllChatsByUserId(id);

  return NextResponse.json(result);
}
