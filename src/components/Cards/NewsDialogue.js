import { Dialog, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import FileCard from "./fileCard";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2, 1),
  },
  title: {
    margin: theme.spacing(2),
    fontWeight: "700",
  },
  text: {
    overFlowY: "scroll",
    margin: theme.spacing(2),
  },
  description: {
    // direction: 'rtl',
    lineHeight: "1.75",
  },
  h_iframe_aparat_embed_frame: {
    position: "relative",
    "& iframe": {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: "100%",
      height: "100%",
      border: "none",
      borderRadius: 8,
    },
    "& span": {
      display: "block",
      paddingTop: "56%",
    },
    margin: theme.spacing(4, 0),
  },
}));

function NewsDialogue({ open, handleClose, name, teaserLink, description,image,files }) {
  const classes = useStyles();
  let teaserSection = "";
  if (teaserLink) {
    teaserSection = (
      <div className={classes.h_iframe_aparat_embed_frame}>
        <span>
          {/* <iframe
            title={name}
            src={teaserLink}
            allowFullScreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"></iframe> */}
        </span>
      </div>
    );
  }
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={handleClose}
      style={{ overflow: "hidden" }}
    >
      <section
        className={classes.container}
        style={{
          backgroundColor: "#0F2E47",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + image}
          alt=""
          style={{ borderRadius: "8px" }}
        />
        {teaserLink}
        <Typography
          gutterBottom
          variant="h4"
          align="center"
          className={classes.title}
          sx={{
            color: "#D6D5D5",
            fontFamily: "IRANSansX",
            fontWeight: 700,
            fontSize: "24px",
            textAlign: "left",
            marginBottom: 2,
            marginTop: 2,
            paddingLeft: 2,
          }}
        >
          {"" + name + ""}
        </Typography>
        <div className={classes.text}>
          {description.map((paragraph, index) => (
            <Grid item key={index}>
              <Typography
                component="h4"
                variant="h6"
                gutterBottom
                className={classes.description}
                sx={{
                  color: "#D6D5D5",
                  fontFamily: "IRANSansX",
                  fontWeight: 400,
                  textAlign: "left",
                }}
              >
                {paragraph}
              </Typography>
            </Grid>
          ))}
        </div>

        <div>
          <Grid container >
            {files.map((files, index) => (
              <Grid
                key={index}
                container
                alignItems="center"
                justify="center"
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ justifyContent: "center" }}
              >
                
                <FileCard
                  files={files}
                />
              
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    </Dialog>
  );
}

export default NewsDialogue;
