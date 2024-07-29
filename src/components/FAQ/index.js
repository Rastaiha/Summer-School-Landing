import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { React } from "react";

import According from "./According";

const useStyles = makeStyles((theme) => ({
  section: {

    zIndex: 5,
    position: "relative",
  },

  image: {
    maxHeight: 400,
    width: "100%",
    maxWidth: 400,
  },
}));

function Index({ questions }) {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            justifyContent: "center",
            height: "80px",
            width: "300px",
            fontFamily: "IRANSansX",
            fontWeight: 700,
            fontSize: "40px",
            backgroundColor: "#00305d",
            color: "#C3C3C3",
            borderColor: "#C3C3C3",
            border: 2,
            marginBottom: 10,
            borderRadius: "30px",
            alignContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          {"سوالات متداول"}
        </Typography>
        <Grid
          container
          justify="center"
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} md={8}>
            <According questions={questions} />
          </Grid>
          {/* <Grid item xs={12} md={5} container justifyContent='center'>
            <img
              src={process.env.PUBLIC_URL + '/22.jpg'}
              alt="" className={classes.image}
            />
          </Grid> */}
        </Grid>
      </Container>
    </section>
  );
}

export default Index;
