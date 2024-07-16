'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { usePopover } from '@/hooks/use-popover';

import { MobileNav } from './mobile-nav';
import { UserPopover } from './user-popover';

import { type MyNavItemConfig } from '@/types/nav'

import Link from 'next/link';
import Button from '@mui/material/Button';
import { Logo } from '@/components/core/logo';

export function MyMainNav({ routes } : { routes: MyNavItemConfig[] }): React.JSX.Element {
  const [openNav, setOpenNav] = React.useState<boolean>(false);

  const userPopover = usePopover<HTMLDivElement>();

  const renderRoutes = routes.map(({ name, href }) => {
    const returnValue = 
      <Tab label={name} component={Link} value={href} href={href} />
    ;

    return returnValue;
  });

  return (
    <React.Fragment>
      
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid var(--mui-palette-divider)',
          backgroundColor: 'var(--mui-palette-background-paper)',
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 'var(--mui-zIndex-appBar)',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'space-between', minHeight: '64px', px: 2 }}
        >
          <Logo color="light" height={32} width={122} />
          <Stack sx={{ alignItems: 'center', marginLeft: '2rem' }} direction="row" spacing={2}>
            <Tabs
              // textColor="secondary"
              // sx={{ width: "60%" }}
            >
              {renderRoutes}
            </Tabs>
          </Stack>
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            <Button sx={{ marginRight: "5rem" }} variant="contained">
              Upload
            </Button>
          </Stack>
        </Stack>
      </Box>
      <UserPopover anchorEl={userPopover.anchorRef.current} onClose={userPopover.handleClose} open={userPopover.open} />
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
}
