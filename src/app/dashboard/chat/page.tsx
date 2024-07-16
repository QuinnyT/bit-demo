"use client"
import * as React from 'react';
import { useState } from 'react';
// import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
// import { config } from '@/config';

import { MySideNav } from '@/components/dashboard/layout/my-side-nav';
import { ChatBot } from "@/components//dashboard/chatbot";
import Button from '@mui/material/Button';


// export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  const [chatLists, setChatLists] = useState(["chat 1"]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  function addNewChat(): void {
    const newIndex = chatLists.length;
    setChatLists((prev) => [...prev, `chat${newIndex + 1}`]);
    setSelectedIndex(newIndex);
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
      <ChatBot />
    </Stack>
  );
}
