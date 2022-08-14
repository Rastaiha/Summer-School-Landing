import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { margin } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  featuresSectionPaper: {
    padding: theme.spacing(0),
    "& img": {
      width: "100%",
      maxWidth: 400,
      borderRadius: "8px",
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
              variant="h1"
              align="left"
              marginBottom={3}
              gutterBottom
              sx={{
                color: "#D6D5D5",
                fontFamily: "IRANSansX",
                fontWeight: 700,
                fontSize: "40px",
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
              جمع علمی-ترویجی رستا و سازمان استعدادهای درخشان، امسال با دوتا
              مدرسه تابستانه در کنار شما هستن! یک مدرسه تابستانه‌ی مجازی و یک
              مدرسه تابستانه‌‌ی حضوری! در این رویدادهای سه روزه‌ در کنار هم طعم
              یادگیری تعاملی، چالش‌های علمی و کار گروهی رو می‌چشیم و در کنار
              همیاران تجربه‌های جدیدی کسب می‌کنیم. رویداد مجازی ۲ تا ۴ شهریورماه
              و در پلتفرم تعاملی کاموا و رویداد حضوری ۸ تا ۱۰ شهریور ماه در
              دانشگاه صنعتی شریف برگزار می‌شه. منتظر حضور شما و دوستانتون در این
              رویداد هستیم!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ padding: { xs: "5%", md: "1px", sm: "1px" } }}
          >
            <img src={process.env.PUBLIC_URL + "/behindWall.png"} alt="" />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default WhatTheFuzz;
