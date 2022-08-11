import { Container, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import workshops from "./workshops";
import WorkshopCard from "./../Cards/WorkshopCard";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(0, 0, 20, 0),
    zIndex: 5,
    position: "relative",
    //backgroundImage: `url(${process.env.PUBLIC_URL}background lines.png)`,
    
  },
  whiteDescription: {
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "justify",
    textJustify: "inter-word",
  },
  title: {
    margin: theme.spacing(0, 0, 0, 0),
  },
}));
function News() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{
            justifyContent: "center",
            height: "80px",
            width: "300px",
            fontFamily: "IRANSansX",
            fontWeight: 700,
            fontSize: "40px",
            backgroundColor: "#113754",
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
          کارگاه‌ها
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", flexWrap: "wrap" }}
        >
          {workshops.map((workshop, index) => (
            <Grid
              key={index}
              container
              alignItems="center"
              justify="center"
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ justifyContent: "center" }}
            >
              <WorkshopCard
                image={process.env.PUBLIC_URL + workshop.image}
                name={workshop.name}
                description={workshop.description}
                place={workshop.place}
                teaserLink={workshop.teaserLink}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default News;
