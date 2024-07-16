
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import FlowChart from '@/components/dashboard/flowchart';

export default function Page({ params }: { params: { id: string } }): React.JSX.Element {
  return (
    <Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
        <Typography variant='h3' sx={{ textAlign: 'center'}} >{params.id}</Typography>
        <img src="" alt='NoPhoto' />
      </Stack>
      <Typography variant='body1' sx={{ maxWidth: '80%', height: '50vh' }} >Descriptions</Typography>
      <Divider />
      <FlowChart />
    </Stack>
  );
}
