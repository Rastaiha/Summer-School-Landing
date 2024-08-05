import { Stack, Box, Typography, Button } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Stack
      sx={{ paddingX: 2, minHeight: "100vh" }}
      direction="column"
      display={"flex"}
      justifyContent="center"
    >
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          marginTop: 8.5,
          top: 0,
          right: 0,
          backgroundImage: {
            xs: `url(https://kamva-minio-storage.darkube.app/rasta/summerschool-1403/background3.png)`,
            md: `url(https://kamva-minio-storage.darkube.app/rasta/summerschool-1403/background2.png)`,
            lg: `url(https://kamva-minio-storage.darkube.app/rasta/summerschool-1403/background.png)`,
          },
          backgroundSize: "cover !important",
          backgroundRepeat: "no-repeat",
          backgroundPosition: 'center',
          zIndex: 1,
        }}
      />

      <Stack
        sx={{ height: "100%", display: "flex" }}
        alignItems="center"
        justifyContent="center">
        <Typography
          variant="h1"
          textAlign={'center'}
          sx={(theme) => ({
            width:'300px !important',
            fontFamily: "PelakFontMainTitle",
            fontSize: 100,
            marginTop: 0,
            lineHeight: "130px",
            fontWeight: 1000,
            color: "#008bc5",
            // textShadow: "0px 0px 4px black",
            [theme.breakpoints.down("md")]: {
              fontSize: 75,
              lineHeight: "100px",
            },
            zIndex: 2,
          })}>
          مدرسه تابستانه ۱۴۰۳
        </Typography>

        <img
          src={process.env.PUBLIC_URL + "/scroll.gif"}
          alt=""
          style={{ width: 25, margin: 30, zIndex: 2 }}
        />
      </Stack>
    </Stack>
  );
};
export default Header;
