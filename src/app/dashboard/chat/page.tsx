import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import { config } from '@/config';

import { MySideNav } from '@/components/dashboard/layout/my-side-nav';
import { ChatBot } from "@/components//dashboard/chatbot";


export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;


export default function Page(): React.JSX.Element {

  const chatLists = ["chat 1"]
  return (
    <Stack spacing={3}>
      <MySideNav title="History" lists={chatLists} />
      <ChatBot />
    </Stack>
  );
}
