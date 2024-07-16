
import { type NextResponse } from 'next/server';
import { type ChatGPTMessage } from '@/lib/openai-stream'

export function GET() {
  const messages: ChatGPTMessage[] = [];
  NextResponse.json(messages, { status: 200 });
}