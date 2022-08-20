import {
  Button,
  Card,
  Grid,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

import CardDialogue from "./NewsDialogue";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "20rem",
    fontSize: "1rem",
    textDecoration: "none",
    overflow: "hidden",
    boxShadow: "0 0 3rem -1rem rgba(0, 0, 0, 0.5)",
    transition: "transform 0.1s ease-in-out",
    "&:hover": {
      transform: "translateY(-0.2rem) scale(1.02)",
      boxShadow: "0 0.5em 3rem -1rem rgba(0, 0, 0, 0.5)",
    },
  },
  media: {
    height: "100px",
  },
  icon: {
    textAlign: "center",
  },
});

const fileCard = ({ files }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea disabled sx={{ backgroundColor: "#D6D5D5" }}>
          <CardMedia
            sx={{
              backgroundImage: `url(${process.env.PUBLIC_URL}${files.image})`,
              backgroundSize:"contain !important"
            }}
            className={classes.media}
          />
        </CardActionArea>
        <CardActions sx={{ backgroundColor: "#D6D5D5" }}>
          <Grid>
            <Button
              sx={{
                color: "#042D4E",
                border: 2,
                fontSize: ".8rem",
                fontWeight: 700,
                borderColor: "#1E5C83",
                borderRadius: "33px",
                fontFamily: "IRANSansX",
                justifyContent: "center",
                textAlign: "center",
              }}
              href={`${process.env.PUBLIC_URL}${files.link}`}
            >
              {files.text}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default fileCard;
