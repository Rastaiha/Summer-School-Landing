import {
  Container,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
  Box,
  Tooltip,
  Stack,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  Instagram as InstagramIcon,
  Telegram as TelegramIcon,
} from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react';

function Index() {
  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#32516A",
        maxWidth: "100%",
        color: "rgba(0, 0, 0, 0.87)",
      }}>
      <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 2 }}>
        <Stack container direction='row' justifyContent='space-evenly'>
          <Stack container justifyContent="center" alignItems="center" spacing={2}>
            <Typography variant='h5' align="center" sx={{ color: "#C3C3C3" }}>
              حامیان و برگزارکنندگان:
            </Typography>
            <Stack>
              <Tooltip
                disabled
                title="سازمان ملی پرورش استعدادهای درخشان"
                arrow
                sx={{ padding: 0 }}>
                <IconButton href="https://sampad.gov.ir/">
                  <img
                    src={process.env.PUBLIC_URL + "/sampad-white.png"}
                    alt=""
                    width={80}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip disabled title="دانشگاه صنعتی شریف" arrow sx={{ padding: 1 }}>
                <IconButton href="https://www.sharif.edu/">
                  <img
                    src={process.env.PUBLIC_URL + "/sharif-white.png"}
                    alt=""
                    width={45}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="جمع علمی-ترویجی رستا" arrow sx={{ padding: 1 }}>
                <IconButton disabled href="https://www.rastaiha.ir/">
                  <img
                    src={process.env.PUBLIC_URL + "/white-rasta-logo.png"}
                    alt=""
                    height={55}
                  />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack container justifyContent="center" alignItems="center" spacing={2}>
            <Stack
              alignItems='center'
              justifyContent='center'
              sx={{
                backgroundColor: 'white',
                borderRadius: '50%',
                width: 70,
                height: 70,
              }}>
              <img
                src={process.env.PUBLIC_URL + "/Sampad2.png"}
                alt=""
                width={60}
                height={60}
              />
            </Stack>
            <Stack>
              <Typography variant='h5' align="center" sx={{ color: "#C3C3C3" }}>
                دبیرخانه مدرسه تابستانه ۱۴۰۱
              </Typography>
              <Typography variant='h5' align="center" sx={{ color: "#C3C3C3" }}>
                سازمان ملی پرورش استعدادهای درخشان
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </section >
  );
}

export default Index;
