import { Button, Grid, Typography, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import getRandomSubarray from "../utils/getRandomSubarray";
import PersonCard from "./Cards/PersonCard";

function OurTeam({ members = [], count = 4 }) {
  if (members.length === 0) return <></>;

  return (
    <section style={{ paddingBottom: 80 }}>
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
          {"دست اندر کاران"}
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {getRandomSubarray(members, count).map((member, index) => (
            <Grid
              container
              item
              alignItems="center"
              xs={10}
              sm={4}
              md={3}
              key={index}
              justify="center"
            >
              <PersonCard person={member} />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          sx={(theme) => ({
            margin: theme.spacing(2, "auto", 0),
            textAlign: "center",
            display: "table",
          })}
          //component={Link}
          target="_blank"
          rel="noopener"
          //to="/our-team/"
          href="https://summerschoollanding-7tt.pages.dev/our-team"
        >
          {"مشاهده بیشتر"}
        </Button>
      </Container>
    </section>
  );
}

export default OurTeam;
