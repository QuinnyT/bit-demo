"use client";

import * as React from 'react';
import Stack from '@mui/material/Stack';
import List from "@/components/dashboard/list";
import { Typography } from '@mui/material';
import { itemsList } from '@/lib/items-list'

export default function Page({ params }: { params: { id: string } }): React.JSX.Element {

  return (
      <Stack>
        <Typography variant='h3' sx={{mb: 5, textAlign: 'center'}} >{params.id}</Typography>
        <List items={itemsList} />
      </Stack>
  );
}
