import React from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';
import HeaderMiddle from './Header';
import Sidenav from './Sidenav';
import { Outlet } from 'react-router-dom';

export default function AppShellDemo() {
  const theme = useMantineTheme();

  return (
    <div dir="rtl">
      <AppShell
        navbar={<Sidenav />}
        navbarOffsetBreakpoint="sm"
        asidePosition="top"
        styles={{
          aside: {
            background:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        header={<HeaderMiddle />}
      >
        <Outlet />
      </AppShell>
    </div>
  );
}
