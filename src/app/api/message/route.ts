
import { OpenAI } from 'openai';
import { type
  ChatGPTMessage,
} from '@/lib/openai-stream'
import { type NextRequest, NextResponse } from 'next/server';

import ChatMessage from '@/model/chat-message';
import dbConnect from '@/lib/mongodb';

const openai = new OpenAI({
  baseURL: "https://chatapi.midjourney-vip.cn/v1",
  apiKey: process.env.OPENAI_API_KEY
});

async function getRes(messages: ChatGPTMessage[]) {
  const data = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages
  })
  return data;
}

async function saveData(userMsg: ChatGPTMessage, botMsg: OpenAI.Chat.Completions.ChatCompletionMessage) {
  const userMessage = new ChatMessage({ sender: userMsg.role, text: userMsg.content });
  await userMessage.save();
  const botMessage = new ChatMessage({ sender: botMsg.role, text: botMsg.content });
  await botMessage.save();
}


export async function GET() {
  try {
    await dbConnect();
    const messages = await ChatMessage.find().sort({ timestamp: 1 });
    console.log("dbmessages", messages)

    return NextResponse.json(messages, { status: 200 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    const message = messages[0]
    console.log("message", message)
    
    // 存储用户消息
    // const userMessage = new ChatMessage({ sender: message.role, text: message.content });
    // await userMessage.save();
    // console.log("已存储use数据")

    // 获取response
    const botRes = await getRes(messages);
    console.log("bot response", botRes)
    
    // 存储bot消息
    // const botResponse = botRes.choices[0].message;
    // const botMessage = new ChatMessage({ sender: botResponse.role, text: botResponse.content });
    // await botMessage.save();
    // console.log("已存储Bot数据")

    await saveData(message, botRes.choices[0].message);
    console.log("已存储记录至mongodb")

    return NextResponse.json({ response: botRes }, { status: 200 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}