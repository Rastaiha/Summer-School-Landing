import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { margin } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  featuresSectionPaper: {
    padding: theme.spacing(0),
    "& img": {
      width: "100%",
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
        backgroundColor: "yellow",
        padding: "10%",
      }}
    >
      <Paper
        className={classes.featuresSectionPaper}
        sx={{ backgroundColor: "red" }}
      >
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          justifyContent="right"
          sx={{
            backgroundColor: "#113754",
            borderRadius: "8px",
          }}
        >
          <Grid item xs={12} sm={8}>
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
              بچه‌های تیم طراحی و همیارها، داخل کارگاه‌ها همراهتون هستند و با
              همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه که سوال‌ها
              و مشارکت‌ شما داخل کارگاه از مهم‌ترین و واجب‌ترین چیزهاست. بچه‌های
              تیم طراحی و همیارها، داخل کارگاه‌ها همراهتون هستند و با همراه هم
              در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه که سوال‌ها و
              مشارکت‌ شما داخل کارگاه از مهم‌ترین و واجب‌ترین چیزهاست. بچه‌های
              تیم طراحی و همیارها، داخل کارگاه‌ها همراهتون هستند و با همراه هم
              در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه که سوال‌ها و
              مشارکت‌ شما داخل کارگاه از مهم‌ترین و واجب‌ترین چیزهاست.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img src={process.env.PUBLIC_URL + "/behindWall.png"} alt="" />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default WhatTheFuzz;
