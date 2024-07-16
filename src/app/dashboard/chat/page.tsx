"use client"
import * as React from 'react';
import { useEffect, useState } from 'react';
// import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
// import { config } from '@/config';

import { MySideNav } from '@/components/dashboard/layout/my-side-nav';
import { ChatBot } from "@/components//dashboard/chatbot";
import Button from '@mui/material/Button';
import { ChatGPTMessage } from '@/lib/openai-stream';


// export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;
interface ApiResponse {
  sender: string;
  text: string;
}

interface Message {
  role: string;
  content: string;
}

export default function Page(): React.JSX.Element {
  const [chatLists, setChatLists] = useState(["chat 1"]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    async function getHistoryData(): Promise<void> {
      try {
        const response = await fetch('/api/message');
        if (!response.ok) {
          throw new Error("获取聊天记录时出现问题");
        }
        const result = await response.json();
        console.log("result", result)
        const messages = result.map((res) => {
          return {
            role: res.sender,
            content: res.text
          }
        })
        setMessages(messages);
      } catch (error) {
        console.log("获取聊天记录时出现问题", error)
      }
    }
    getHistoryData();
  }, [])
  
  function addNewChat(): void {
    const newIndex = chatLists.length;
    setChatLists((prev) => [...prev, `chat${newIndex + 1}`]);
    setSelectedIndex(newIndex);
    setMessages([])
  }

  function changeSelectedChat(chatIndex: number): void {
    console.log("chatName", chatLists[chatIndex])
    setSelectedIndex(chatIndex)
  }

  return (
    <Stack spacing={3}>
      <MySideNav title="History" lists={chatLists} selectedIndex={selectedIndex} changeSelectedItem={changeSelectedChat}>
        <Button
            sx={{ mt: 2, width: '80%' }}
            variant="contained"
            onClick={addNewChat}
          >
            Add Chat Box
        </Button>
      </MySideNav>
      <ChatBot messages={messages} setMessages={setMessages} />
    </Stack>
  );
}
