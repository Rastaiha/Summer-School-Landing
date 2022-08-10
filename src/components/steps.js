import { Container, Grid, Paper, Typography } from "@mui/material";
import { React } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0, 20, 0),
    zIndex: 5,
    position: "relative",
    background: "brown",
  },

  featuresSectionPaper: {
    padding: theme.spacing(4),
    "& img": {
      width: "100%",
    },
    backgroundColor: "#113754"
  },

  title: {
    color: "#FFFFFF",
    textShadow: "-1px 1px #412C7D",
    margin: theme.spacing(0, 0, 7, 0),
  },

  description: {
    textAlign: "center",
    textJustify: "inter-word",
  },
}));

function Index() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: "#113754", borderRadius: "8px", padding: 5 }}
      >
        <Typography
          className={classes.title}
          variant="h1"
          gutterBottom
          sx={{
            marginBottom: 3,
            color: "#D6D5D5",
            fontFamily: "IRANSansX",
            fontWeight: 700,
            fontSize: "40px",
          }}
        >
          {"چه چیزهایی در انتظار ما می‌باشد"}
        </Typography>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={3}
        >
          <Grid item xs={12} sm={10} md={8}>
            <Paper
              className={classes.featuresSectionPaper}
              elevation={3}
              sx={{ backgroundColor: "#113754", boxShadow: "none" }}
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{ backgroundColor: "#113754" }}
              >
                <Grid item xs={12} sm={4}>
                  <img src={process.env.PUBLIC_URL + "/step-1.png"} alt="" />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                    sx={{
                      color: "#D6D5D5",
                      fontFamily: "IRANSansX",
                      fontWeight: 700,
                      fontSize: "24px",
                    }}
                  >
                    {"کارگاه مجازی"}
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
                    متاسفانه امسال هم به خاطر شرایط کرونایی، قراره کارگاه‌های
                    رویداد رو به صورت مجازی داشته باشیم. اما شما از این فرصت
                    استفاده کنین و با دوست‌هاتون از هر شهر و جای دیگه‌ای که
                    هستند در رویداد شرکت کنین!
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Paper
              className={classes.featuresSectionPaper}
              sx={{ backgroundColor: "#113754", boxShadow: "none" }}
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} sm={8}>
                  <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                    sx={{
                      color: "#D6D5D5",
                      fontFamily: "IRANSansX",
                      fontWeight: 700,
                      fontSize: "24px",
                    }}
                  >
                    {"ارتباط با همیار"}
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
                    بچه‌های تیم طراحی و همیارها، داخل کارگاه‌ها همراهتون هستند و
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    که سوال‌ها و مشارکت‌ شما داخل کارگاه از مهم‌ترین و واجب‌ترین
                    چیزهاست.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <img src={process.env.PUBLIC_URL + "/step-2.png"} alt="" />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Paper
              className={classes.featuresSectionPaper}
              sx={{ backgroundColor: "#113754", boxShadow: "none" }}
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} sm={4}>
                  <img src={process.env.PUBLIC_URL + "/step-3.png"} alt="" />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                    sx={{
                      color: "#D6D5D5",
                      fontFamily: "IRANSansX",
                      fontWeight: 700,
                      fontSize: "24px",
                    }}
                  >
                    {"کار گروهی"}
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
                    هم توی رستا و هم داناک، آموزش بر اساس تعامل در گروه‌ها و کار
                    روی مسئله‌های چالش‌برانگیز، واقعی و نزدیک به دنیای فکری
                    مخاطبینه. هدف ما از آموزش مسائل به شکل تعامل‌محور، ایجاد
                    خلاقیت و یادگیری عمیق و همچنین تقویت روحیه کار گروهی توی
                    شماست!{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Index;
