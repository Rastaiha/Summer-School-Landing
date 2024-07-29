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
        <Stack direction='row' justifyContent='space-evenly'>
          <Stack justifyContent="center" alignItems="center" spacing={2}>
            <Typography variant='h5' align="center" sx={{ color: "#C3C3C3" }}>
              حامیان و برگزارکنندگان:
            </Typography>
            <Stack>
              <Tooltip disabled title="دانشگاه اصفهان" arrow sx={{ padding: 1 }}>
                <IconButton href="https://www.ui.ac.ir/">
                  <img
                    src={"https://kamva-minio-storage.darkube.app/rasta/summerschool-1403/isfahan.svg"}
                    alt=""
                    width={45}
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
        </Stack>
      </Container>
    </section >
  );
}

export default Index;
