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
            xs: `url(${process.env.PUBLIC_URL}background3.png)`,
            md: `url(${process.env.PUBLIC_URL}background.png)`,
          },
          backgroundSize: "cover !important",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />

      <Stack
        sx={{ height: "100%", display: "flex" }}
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
            justifyContent: "center",
            [theme.breakpoints.down("md")]: {
              fontSize: 70,
              lineHeight: "100px",
              width: 200,
            },
            zIndex: 2,
          })}
        >
          مدرسه تابستانه ۱۴۰۲
        </Typography>
        <Button
          variant="outlined"
          href={process.env.PUBLIC_URL + "/shivenameh.pdf"}
          sx={{
            display: "flex",
            fontWeight: 700,
            fontSize: { xs: 12, md: 15 },
            marginRight: { xs: 1, sm: 0 },
            backgroundColor: "#072A40",
            color: "white",
            textDecoration: "none",
            borderRadius: "70px",
            border: 1,
            borderColor: "#4A4A4A",
            blockSize: 40,
            "&:hover": {
              backgroundColor: "#fff",
              color: "#0F2E47",
            },
            zIndex: 2,
          }}
        >
          دانلود شیوه نامه
        </Button>
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
