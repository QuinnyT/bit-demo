"use client";

import * as React from 'react';
import Stack from '@mui/material/Stack';
import { MySideNav } from '@/components/dashboard/layout/my-side-nav';
import { useRouter } from 'next/navigation';
import { itemsList } from '@/lib/items-list'
import { useState } from 'react';

interface LayoutProps {
    children: React.ReactNode;
  }
  

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  const router = useRouter();
  // const itemsList = ["item1", "item2", "item3", "item4"]
  const [selectedIndex, setSelectedIndex] = useState(0);

  async function changeSelectedItem (itemIndex: number): Promise<void> {
    setSelectedIndex(itemIndex);
    const itemId = itemsList[itemIndex].name;
    try {
      router.push(`/dashboard/lists/items/${itemId}`);
    } catch (error) {
      console.error('Failed to navigate:', error);
    }
  }
  return (
    <Stack spacing={3}>
      <MySideNav title="舱段 1 - 第一象限" lists={itemsList.map(item => item.name_ch)} selectedIndex={selectedIndex} changeSelectedItem={changeSelectedItem}  />
      {children}
    </Stack>
  );
}