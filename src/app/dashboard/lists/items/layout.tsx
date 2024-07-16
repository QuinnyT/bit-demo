"use client";

import * as React from 'react';
import Stack from '@mui/material/Stack';
import { MySideNav } from '@/components/dashboard/layout/my-side-nav';
import { useRouter } from 'next/navigation';

interface LayoutProps {
    children: React.ReactNode;
  }
  

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  const router = useRouter();
  const itemsList = ["item1", "item2", "item3", "item4"]

  async function changeSelectedItem (itemId: string): Promise<void> {
    try {
      router.push(`/dashboard/lists/items/${itemId}`);
    } catch (error) {
      console.error('Failed to navigate:', error);
    }
  }
  return (
    <Stack spacing={3}>
      <MySideNav title="Store" lists={itemsList} changeSelectedItem={changeSelectedItem}  />
      {children}
    </Stack>
  );
}