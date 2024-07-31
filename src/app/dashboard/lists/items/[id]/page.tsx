
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
        <Typography variant='h3' sx={{ textAlign: 'center'}} >{item?.name_ch}</Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={16}>
        <Typography variant='body1' sx={{ maxWidth: '80%', p: 4 }} >
          存储时间: 2024/07/01<br/>
          使用者: 小明<br/>
          物件存放位置: 舱段1 第一象限<br/>
          <br/>
          使用记录:<br/>
          1. 使用时间: 2024/07/01 14:12<br/>
          使用者: 小华<br/>
          物品操作: 从 舱段1-第一象限-货柜A 拿取<br/>
          存放位置: 舱段1-第一象限-货柜B<br/>
          <br/>
          2. 使用时间: 2024/07/02 9:10<br/>
          使用者: 小明<br/>
          物品操作: 从 舱段1-第一象限-货柜B 拿取<br/>
          存放位置: 舱段1-第一象限-货柜C<br/>
          <br/>
          3. 使用时间: 2024/07/02 20:21<br/>
          使用者: 小华<br/>
          物品操作: 从 舱段1-第一象限-货柜C 拿取<br/>
          存放位置:  舱段1-第一象限-货柜A<br/>
        </Typography>
        <img width={180} height={180} src={item?.image} alt='item.name'/>

      </Stack>
      <Divider />

      <FlowChart />

    </Stack>
  );
}
