import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { margin } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  featuresSectionPaper: {
    padding: theme.spacing(0),
    "& img": {
      width: "100%",maxWidth:400, borderRadius:"8px"
    },
  },

  title: {
    color: "#FFFFFF",
    textShadow: "-1px 1px #412C7D",
    margin: theme.spacing(0, 0, 7, 0),
  },

  description: {
    textAlign: "start",
    textJustify: "inter-word",
  },
}));
const WhatTheFuzz = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      sm={10}
      md={8}
      sx={{
        paddingLeft: { md: "12%", sm: "10%", xs: "5%" },
        paddingRight: { md: "12%", sm: "10%", xs: "5%" },
      }}
    >
      <Paper
        className={classes.featuresSectionPaper}
        sx={{ backgroundColor: "red" }}
      >
        <Grid
          container
          alignItems="flex-start"
          justifyContent="right"
          sx={{
            backgroundColor: "#113754",
            borderRadius: "8px",
            padding: "3%",
          }}
        >
          <Grid item xs={12} sm={9}>
            <Typography
              variant="h2"
              align="left"
              marginBottom={3}
              gutterBottom
              sx={{
                color: "#D6D5D5",
                fontFamily: "IRANSansX",
                fontWeight: 700,
                fontSize: "24px",
              }}
            >
              {"اینجا چه خبره؟"}
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.description}
              sx={{
                color: "#D6D5D5",
                fontFamily: "IRANSansX",
                fontWeight: 400,
              }}
            >
              امسال متفاوت‌تر و با دو تا رویداد کنار شماییم. یک رویداد حضوری در
              شهر تهران و یک رویداد مجازی! رویداد مجازی در پلتفرم تعاملی و در
              بازه‌ی دوم تا چهارم شهریور ماه برگزار می‌شه. رویداد حضوری در
              دانشگاه صنعتی شریف برگزار می‌شه و از هشتم تا دهم شهوریور خواهد
              بود.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} sx={{padding:{xs:"5%",md:"1px",sm:"1px"}}}>
            <img src={process.env.PUBLIC_URL + "/behindWall.png"} alt="" />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default WhatTheFuzz;
