import {
  ButtonGroup,
  Typography,
  Stack,
  Box,
  Container,
  SvgIcon,
  Tooltip,
  Paper,
  Chip,
  IconButton,
} from '@mui/material';
import React from 'react';
import useWidth from '../utils/UseWidth';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const Landing = () => {
  const width = useWidth();

  return (
    <Stack sx={{ paddingY: 10, paddingX: 2, minHeight: '100vh' }} direction='column' justifyContent='center'>
      <Box
        sx={(theme) => ({
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          right: 0,
          backgroundImage: `url(${process.env.PUBLIC_URL}background.jpeg)`,
          backgroundSize: 'cover !important',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          filter: 'blur(15px)',
          zIndex: -1,
        })} />

      <Stack sx={{ height: '100%' }} alignItems='center' justifyContent='center'>
        <Typography
          variant="h1"
          sx={(theme) => ({
            fontFamily: 'iranyekanwebbold',
            fontSize: 80,
            lineHeight: '90px',
            fontWeight: 1000,
            color: '#ffffff',
            textShadow: '0px 0px 4px black',
            textAlign: 'center',
            marginBottom: 3,
            [theme.breakpoints.down('md')]: {
              fontSize: 60,
              lineHeight: '70px',
            },
          })}>
          مدرسه تابستانه ۱۴۰۱
        </Typography>

        <Typography
          variant="h2"
          sx={(theme) => ({
            fontSize: 50,
            lineHeight: 1,
            fontWeight: 800,
            color: '#ffffff',
            textShadow: '0px 0px 3px black',
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
              fontSize: 40,
              lineHeight: 1,
            },
          })}>
          به زودی...
        </Typography>

        <Chip sx={{ padding: 1, marginTop: 10, fontSize: 20 }} size='medium' icon={<PhoneEnabledIcon />} variant="filled" label="اطلاعات بیشتر:" />
        <Chip sx={{ padding: 1, marginTop: 1, fontSize: 20 }} size='medium' variant="filled" label="09909478595" />


        <Stack direction={['xs', 'sm'].includes(width) ? 'column' : 'row'} sx={{ paddingTop: 10, }} spacing={2}>
          <Tooltip title='سازمان ملی پرورش استعدادهای درخشان' arrow>
            <IconButton href='https://sampad.gov.ir/'>
              <img
                src={process.env.PUBLIC_URL + '/sampad-logo.png'}
                alt=""
                width={100}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title='جمع علمی-ترویجی رستا' arrow>
            <IconButton href='https://www.rastaiha.ir/'>
              <img
                src={process.env.PUBLIC_URL + '/rasta-logo.png'}
                alt=""
                width={100}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title='دانشگاه صنعتی شریف' arrow>
            <IconButton href='https://www.sharif.edu/'>
              <img
                src={process.env.PUBLIC_URL + '/sharif-logo.png'}
                alt=""
                width={100}
              />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

    </Stack >
  );
}

export default Landing;