import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from './Link';
import ProTip from './ProTip';
import Copyright from './Copyright';

type LayoutProps = {
  children: React.ReactNode,
};

export default function Layout({children} :LayoutProps) {
    return (
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    );
  }