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
        paddingTop: 6,
        backgroundColor: "#32516A",
        maxWidth: "100%",
        color: "rgba(0, 0, 0, 0.87)",
      }}>
      <Container maxWidth="lg">
        <Stack container justifyContent="center" alignItems="center">
          <Typography variant='h5' align="center" sx={{ color: "#C3C3C3" }}>
            حامیان و برگزارکنندگان:
          </Typography>
          <Stack>
            <Box
              sx={{ flexGrow: 0, margin: 0, display: { xs: "none", md: "flex" } }}>
              <Tooltip title="جمع علمی-ترویجی رستا" arrow sx={{ padding: 0 }}>
                <IconButton href="https://www.rastaiha.ir/">
                  <img
                    src={process.env.PUBLIC_URL + "/key-white.png"}
                    alt=""
                    height={50}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="سازمان ملی پرورش استعدادهای درخشان"
                arrow
                sx={{ padding: 0 }}
              >
                <IconButton href="https://sampad.gov.ir/">
                  <img
                    src={process.env.PUBLIC_URL + "/sampad-white.png"}
                    alt=""
                    width={80}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="دانشگاه صنعتی شریف"
                arrow
                sx={{ padding: 0, paddingLeft: 1 }}
              >
                <IconButton href="https://www.sharif.edu/">
                  <img
                    src={process.env.PUBLIC_URL + "/sharif-white.png"}
                    alt=""
                    width={45}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </section >
  );
}

export default Index;