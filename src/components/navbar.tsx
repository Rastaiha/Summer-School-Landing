import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { createTheme,ThemeProvider } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
const pages = ["تیم برگزاری","درباره ما","سوالات متداول", "کارگاه ها", "معرفی رویداد"];

const Navbar = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0F2E47"
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Container
          maxWidth="xl"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Toolbar disableGutters sx={{ flexGrow: 0.3 }}>
            <Button
              variant="outlined"
              endIcon={<LoginIcon />}
              sx={{
                borderRadius: "70px",
                color: "white",
                borderColor: "#4A4A4A",
              }}
            >
              ورود و ثبت نام
            </Button>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Menu
                id="menu-appbar"

                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                }} open={false}              >
                {pages.map((page) => (
                  <MenuItem key={page} >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
      
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "IRANSansX",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, margin: 0 }}>
              <Tooltip title="جمع علمی-ترویجی رستا" arrow>
                <IconButton href="https://www.rastaiha.ir/">
                  <img
                    src={process.env.PUBLIC_URL + "/key-white.png"}
                    alt=""
                    width={40}
                    height={45}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="سازمان ملی پرورش استعدادهای درخشان" arrow>
                <IconButton href="https://sampad.gov.ir/">
                  <img
                    src={process.env.PUBLIC_URL + "/sampad-white.png"}
                    alt=""
                    width={70}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="دانشگاه صنعتی شریف" arrow>
                <IconButton href="https://www.sharif.edu/">
                  <img
                    src={process.env.PUBLIC_URL + "/sharif-white.png"}
                    alt=""
                    width={50}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;
