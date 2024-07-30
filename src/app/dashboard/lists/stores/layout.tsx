"use client";

import * as React from 'react';
import Stack from '@mui/material/Stack';
import { MySideNav } from '@/components/dashboard/layout/my-side-nav';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface LayoutProps {
    children: React.ReactNode;
  }
  

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  const router = useRouter();
  const storesList = ["store1", "store2", "store3", "store4"]
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  async function changeSelectedStore (storeIndex: number): Promise<void> {
    setSelectedIndex(storeIndex)
    const storeId = storesList[storeIndex];
    try {
      router.push(`/dashboard/lists/stores/${storeId}`);
    } catch (error) {
      console.error('Failed to navigate:', error);
    }
  }
  return (
    <Stack spacing={3}>
      <MySideNav title="Store" lists={storesList} selectedIndex={selectedIndex}  changeSelectedItem={changeSelectedStore}  />
      {children}
    </Stack>
  );
}