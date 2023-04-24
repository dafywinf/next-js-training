import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from './Link';
import ProTip from './ProTip';
import Copyright from './Copyright';
import SearchAppBar from './SearchAppBar';

export default function Layout(props: React.PropsWithChildren) {
  return (
    <>
      <SearchAppBar></SearchAppBar>
      <Container sx={{ marginY: 5 }}>
        {props.children}
      </Container>
    </>
  );
}