
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import FlowChart from '@/components/dashboard/flowchart';
import { itemsList } from '@/lib/items-list'

export default function Page({ params }: { params: { id: string } }): React.JSX.Element {
  const item = itemsList.find(item => item.name === params.id);
  return (
    <Stack m={0}>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
        <Typography variant='h3' sx={{ textAlign: 'center'}} >{item?.name}</Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={16}>
        <Typography variant='body1' sx={{ maxWidth: '80%', p: 4 }} >
          Storage time: 2024/7/01<br/>
          Operator: Xiao Ming<br/>
          Item storage location: store 1<br/>
          <br/>
          Usage:<br/>
          1. Time of use: 2024/07/01 14:12<br/>
          User: Xiao Hua<br/>
          Item operation: Take from store 1<br/>
          Current storage location: store 2<br/>
          2. Time of use: 2024/07/02 9:10<br/>
          User: Xiao Ming<br/>
          Item operation: Take from store 2<br/>
          Current storage location: store 3<br/>
          3. Time of use: 2024/07/02 20:21<br/>
          User: XiaoHua<br/>
          Item operation: Take from store 3<br/>
          Current storage location: store 1<br/>
        </Typography>
        <img width={180} height={180} src={item?.image} alt='item.name'/>

      </Stack>
      <Divider />

      <FlowChart />

    </Stack>
  );
}
