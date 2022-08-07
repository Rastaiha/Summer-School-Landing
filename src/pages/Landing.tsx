import {
  Typography,
  Stack,
  Box,
} from '@mui/material';
import React from 'react';
import Navbar from '../components/navbar';
const Landing = () => {
 
  return (
    <div>
      <Navbar />
      <Stack
        sx={{ paddingY: 10, paddingX: 2, minHeight: "100vh" }}
        direction="column"
        justifyContent="center"
      >
        <Box
          sx={(theme) => ({
            height: "100vh",
            width: "100vw",
            position: "absolute",
            marginTop:10,
            top: 0,
            right: 0,
            backgroundImage: `url(${process.env.PUBLIC_URL}background.png)`,
            backgroundSize: "cover !important",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            zIndex: -1,
          })}
        />

        <Stack
          sx={{ height: "100%",display:"flex" }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h1"
            width={400}
            sx={(theme) => ({
              fontFamily: "CactusCircleDots",
              fontSize: 120,
              marginTop: 0,
              lineHeight: "140px",
              fontWeight: 1000,
              color: "#ffffff",
              textShadow: "0px 0px 4px black",
              textAlign: "center",
              justifyContent:'center',
              [theme.breakpoints.down("md")]: {
                fontSize: 60,
                lineHeight: "70px",
              },
            })}
          >
            مدرسه تابستانه ۱۴۰۱
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
}

export default Landing;