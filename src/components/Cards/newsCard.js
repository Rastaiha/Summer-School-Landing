import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { border } from "@mui/system";
import React, { useState } from "react";

import CardDialogue from "./CardDialogue";

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
    height: "280px",
  },
  icon: {
    textAlign: "center",
  },
});

const NewsCard = ({ name, position, image, description, teaserLink }) => {
  const classes = useStyles();
  const [isDialogueOpen, setDialogueOpen] = useState(false);

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea disabled sx={{ backgroundColor: "#D6D5D5" }}>
          <CardMedia
            className={classes.media}
            image={`${process.env.PUBLIC_URL}${image}`}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{
                fontSize: "24px",
                fontWeight: 400,
                fontFamily: "IRANSansX",
              }}
            >
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ backgroundColor: "#D6D5D5" }}>
          <Typography
            sx={{
              backgroundColor: "#042D4E",
              padding: 1,
              marginRight: 1,
              color: "white",
              fontFamily: "IRANSansX",
              borderRadius: "5px",
              borderTopLeftRadius: "20px",
            }}
            variant="button"
          >
            حضوری
          </Typography>
          <Button
            sx={{
              color: "#042D4E",
              border: 2,
              borderColor: "#1E5C83",
              borderRadius: "33px",
              fontFamily: "IRANSansX",
            }}
            onClick={() => setDialogueOpen(!isDialogueOpen)}
          >
            اطلاعات بیشتر
          </Button>
        </CardActions>
      </Card>
      <CardDialogue
        name={name}
        image={image}
        description={description}
        teaserLink={teaserLink}
        open={isDialogueOpen}
        handleClose={() => {
          setDialogueOpen(!isDialogueOpen);
        }}
      />
    </>
  );
};

export default NewsCard;
