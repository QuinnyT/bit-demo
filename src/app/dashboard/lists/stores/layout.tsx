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
  const storesList = ["store1", "store2", "store3", "store4"]

  async function changeSelectedStore (storeId: string): Promise<void> {
    try {
      router.push(`/dashboard/lists/stores/${storeId}`);
    } catch (error) {
      console.error('Failed to navigate:', error);
    }
  }
  return (
    <Stack spacing={3}>
      <MySideNav title="Store" lists={storesList} changeSelectedItem={changeSelectedStore}  />
      {children}
    </Stack>
  );
}