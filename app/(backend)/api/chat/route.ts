import { NextRequest, NextResponse } from 'next/server';
import { chatModel } from '../../model/chat-model';

export async function POST(request: NextRequest) {
  const requestData = await request.json();
  const result = await chatModel.sendChat(
    requestData.payload,
    requestData.userName
  );

  return NextResponse.json(result);
}
