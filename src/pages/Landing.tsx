import {
  ButtonGroup,
  Typography,
  Stack,
  Box,
  Container,
} from '@mui/material';
import React from 'react';
import useWidth from '../utils/UseWidth';

function Landing() {
  const width = useWidth();

  return (
    <>
      <Box
        sx={(theme) => ({
          height: '100vh',
          position: 'relative',
          backgroundColor: '#ffc301',
          zIndex: -2,
          [theme.breakpoints.down('md')]: {
            paddingX: 1,
          },
        })}>
        <img
          src={process.env.PUBLIC_URL + '/wall.png'}
          alt=""
          style={{
            position: 'fixed',
            right: 0,
            zIndex: -1,
            display: ['xs', 'sm'].includes(width) ? 'none' : 'block',
          }}
        />
        <Stack sx={{ height: '100%' }} alignItems='center' justifyContent='center'>
          <Typography component="h1" variant="h1"
            sx={(theme) => ({
              fontSize: 80,
              lineHeight: '90px',
              fontWeight: 1000,
              color: '#e8332a',
              textShadow: '-2px 2px 3px #bd0d01',
              textAlign: 'center',
              marginBottom: 3,
              [theme.breakpoints.down('md')]: {
                fontSize: 60,
                lineHeight: '70px',
              },
            })}>
            مدرسه‌ی تابستانه رستا
          </Typography>
          <Typography component="h1" variant="h1"
            sx={(theme) => ({
              fontSize: 50,
              lineHeight: 1,
              fontWeight: 800,
              color: '#e8332a',
              textAlign: 'center',
              [theme.breakpoints.down('md')]: {
                fontSize: 40,
                lineHeight: 1,
              },
            })}>
            به زودی...
          </Typography>

          <ButtonGroup
            size="large"
            variant="contained"
            color="primary"
            orientation="vertical"
            sx={{
              margin: 4,
              direction: 'ltr',
            }}>

          </ButtonGroup >
        </Stack>
      </Box>
    </>
  );
}

export default Landing;