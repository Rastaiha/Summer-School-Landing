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
  },

  title: {},

  description: {
    textAlign: "right",
    textJustify: "auto",
    color: "#D6D5D5",
  },
}));
const WhoAreWe = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
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
              sx={{ backgroundColor: "#113754" }}
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
                      display: "flex",
                      justifyContent: "start",
                      color: "#D6D5D5",
                      textShadow: "-1px 1px #412C7D",
                      fontSize: "48px",
                      fontFamily: "IRANSansX",
                      fontWeight: 700,
                      marginBottom: 3,
                    }}
                  >
                    {"درباره ما"}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={classes.description}
                  >
                    بچه‌های تیم طراحی و همیارها، داخل کارگاه‌ها همراهتون هستند و
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه
                    که سوال‌ها و مشارکت‌ شما داخل کارگاه از مهم‌ترین و واجب‌ترین
                    چیزهاست.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <img
                    style={{ borderRadius: "8px" }}
                    src={process.env.PUBLIC_URL + "/background.jpeg"}
                    alt=""
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default WhoAreWe;
