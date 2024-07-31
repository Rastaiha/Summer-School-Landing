import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from "@mui/icons-material/Login";
import {
  Stack,
} from "@mui/material";

const pages = [
  "تیم برگزاری",
  "درباره ما",
  "سوالات متداول",
  "کارگاه ها",
  "اخبار",
  "معرفی رویداد",
];



const NavBar = ({ loginLink = "https://platform.kamva.academy/program/42" }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#0F2E47", width: "100vw" }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          padding: 0,
          justifyContent: "center",
          alignContent: "center",
          height: "68px",
        }}
      >
        <Toolbar sx={{ width: '100%' }}>
          <Stack
            direction='row'
            justifyContent={'space-between'}
            alignItems='center'
            sx={{ width: '100%' }}>

            {/* <Box sx={{ display: { xs: "none", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  fontFamily: "IRANSansXRegular",
                  fontWeight: 700,
                  display: { xs: "none", md: "none" },
                }}>
                {pages.map((page) => (
                  <MenuItem
                    key={page}>
                    <Typography
                      sx={{ fontFamily: "IRANSansXRegular" }}
                      textAlign="center">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}

            {/* <IconButton size='small' disabled>
              <img
                src={process.env.PUBLIC_URL + "/sampad-white.png"}
                alt=""
                width={75}
              />
            </IconButton> */}
            <IconButton href="https://www.rastaiha.ir/">
              <img
                src={process.env.PUBLIC_URL + "/white-rasta-logo.png"}
                alt=""
                width={50}
                height={50}
              />
            </IconButton>

            <Button
              variant="outlined"
              href={loginLink}
              startIcon={<LoginIcon />}
              sx={{
                display: "flex",
                fontWeight: 700,
                fontSize: { xs: 12, md: 15 },
                marginRight: { xs: 1, sm: 0 },
                color: "inherit",
                textDecoration: "none",
                borderRadius: "70px",
                border: 1,
                borderColor: "#4A4A4A",
                blockSize: 40,
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#0F2E47",
                },
              }}>
              ثبت‌نام و ورود
            </Button>
          </Stack>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "none" },
              justifyContent: "center",
            }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "IRANSansX",
                  fontSize: "15px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* <Box
            sx={{ flexGrow: 0, margin: 0, display: { xs: "none", md: "flex" } }}
          >
            <Tooltip title="جمع علمی-ترویجی رستا" arrow sx={{ padding: 0 }}>
              <IconButton href="https://www.rastaiha.ir/">
                <img
                  src={process.env.PUBLIC_URL + "/white-rasta-logo.png"}
                  alt=""
                  width={40}
                  height={45}
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
                  width={70}
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
                  width={50}
                />
              </IconButton>
            </Tooltip>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
