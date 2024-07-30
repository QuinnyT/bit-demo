'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface MySideNavProps {
  title: string;
  lists: string[];
  selectedIndex?: number;
  changeSelectedItem?: (item: number) => void;
  children?: React.ReactNode;
}

export function MySideNav({ title, lists, selectedIndex, changeSelectedItem, children }: MySideNavProps): React.JSX.Element {
  return (
    <Box
      sx={{
        '--SideNav-background': 'var(--mui-palette-neutral-950)',
        '--SideNav-color': 'var(--mui-palette-common-white)',
        '--NavItem-color': 'var(--mui-palette-neutral-300)',
        '--NavItem-hover-background': 'rgba(255, 255, 255, 0.04)',
        '--NavItem-active-background': 'var(--mui-palette-primary-main)',
        '--NavItem-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavItem-disabled-color': 'var(--mui-palette-neutral-500)',
        '--NavItem-icon-color': 'var(--mui-palette-neutral-400)',
        '--NavItem-icon-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
        bgcolor: '#040332',
        // color: 'var(--SideNav-color)',
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        height: '80%',
        left: 0,
        maxWidth: '100%',
        position: 'fixed',
        scrollbarWidth: 'none',
        top: '10%',
        width: 'var(--SideNav-width)',
        zIndex: 'var(--SideNav-zIndex)',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'var(--mui-palette-neutral-950)',
            color: '#fff',
            p: '4px 12px',
          }}
        >
          <Typography variant="h5">
            {title}
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />
      <Box component="nav" sx={{ flex: '1 1 auto', p: '12px' }}>
         {lists.map((item, index) => (
          <Box key={item}
               onClick={() => {
                  if (changeSelectedItem)
                    changeSelectedItem(index)
               }}
               sx={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 color: index === selectedIndex ? '#000' : '#fff',
                 backgroundColor: index === selectedIndex ? '#BFC1D9' : 'none',
                 cursor: 'pointer',
                 mt: 2,
                 height: '3rem',
                 borderRadius: '10px'
               }} >
            {/* <Typography color="var(--mui-palette-neutral-400)" variant="body2"> */}
            <Typography color={index === selectedIndex ? '#000' : '#fff'} variant="body2">
              {item}
            </Typography>
          </Box>
         ))}
          
      </Box>
      <Stack justifyContent="center" alignItems="center" p={2}>{children}</Stack>
      
    </Box>
  );
}

