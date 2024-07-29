import { Container, Grid, Paper, Typography } from "@mui/material";
import { React } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0, 20, 0),
    zIndex: 5,
    position: "relative",
  },

  featuresSectionPaper: {
    padding: theme.spacing(4),
    "& img": {
      width: "100%",
    },
    backgroundColor: "#113754",
  },

  title: {
    color: "#FFFFFF",
    textShadow: "-1px 1px #412C7D",
    margin: theme.spacing(0, 0, 7, 0),
  },

  description: {
    textAlign: "right",
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
          {"چه چیزهایی در انتظار ماست؟"}
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
                  <img
                    src={process.env.PUBLIC_URL + "/step-1.jpg"}
                    alt=""
                    style={{ borderRadius: "8px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  {/* <Typography
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
                  </Typography> */}
                  <Typography
                    variant="subtitle1"
                    className={classes.description}
                    sx={{
                      color: "#D6D5D5",
                      fontFamily: "IRANSansX",
                      fontWeight: 400,
                    }}
                  >
                    سه روز صمیمی و پرنشاط با طعم یادگیری تعاملی! مدرسه تابستانه
                    امسال بخش‌های مختلفی اعم از کارگاه‌های علمی، بازی، ارائه های
                    علمی و مسابقه‌ی نهایی داره.
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
                  {/* <Typography
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
                  </Typography> */}
                  <Typography
                    variant="subtitle1"
                    className={classes.description}
                    sx={{
                      color: "#D6D5D5",
                      fontFamily: "IRANSansX",
                      fontWeight: 400,
                      textAlign: "center !important",
                    }}
                  >
                    توی این رویداد
                    حضوری ۵ کارگاه علمی با موضوعات اقتصاد، فیزیک،
                    ماشین خودران، رمزنگاری و بازی و احتمال داریم.
                    توی کارگاه‌های علمی قراره به صورت تعاملی موضوعات جالبی رو
                    یاد بگیریم و با چالش‌های جذابی رو‌ به رو بشیم.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <img
                    src={process.env.PUBLIC_URL + "/step-2.jpg"}
                    alt=""
                    style={{ borderRadius: "8px" }}
                  />
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
                  <img
                    src={process.env.PUBLIC_URL + "/step-3.jpg"}
                    alt=""
                    style={{ borderRadius: "8px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  {/* <Typography
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
                  </Typography> */}
                  <Typography
                    variant="subtitle1"
                    className={classes.description}
                    sx={{
                      color: "#D6D5D5",
                      fontFamily: "IRANSansX",
                      fontWeight: 400,
                    }}
                  >
                    همچنین در طی هر دو رویداد، ارائه‌های علمی‌ای گفتگومحوری رو
                    خواهیم داشت که توی اون‌ها، استادهای خوش‌ذوق و توانمند، قراره
                    برامون صحبت کنن و نگاه تازه‌ای از مسائل مختلف به ما بدن. در
                    نهایت هم به صورت گروهی توی یک مسابقه‌ی نهایی جذاب،{"\n"}
                    مهارت‌هامون رو می‌سنجیم و با دید جدیدی که کارگاه‌ها بهمون
                    دادن و دانسته‌های قبلیمون چالش‌های مسابقه‌ی نهایی رو پشت سر
                    میذاریم.
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
