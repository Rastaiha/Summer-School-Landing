import { Dialog, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    padding:theme.spacing(2,1),
  },
  title:{
    margin:theme.spacing(2),
    fontWeight:'700'
  },
  image: (props) => ({
    backgroundImage: `url(${process.env.PUBLIC_URL}${props.image})`,
    backgroundSize: 'cover !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    boxShadow: '2px 2px 5px gray',
    height: 'inherit',
  }),
  text: {
    overFlowY: 'scroll',
    margin:theme.spacing(2),
  },
  description: {
    direction:'rtl',
    lineHeight:'1.75'
  },
}));

function CardDialogue({ open, handleClose, name, image, description }) {
  const classes = useStyles({ image });

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={handleClose}
      style={{overflow:'hidden'}}
      >
        <section className={classes.container}>
          <Typography gutterBottom variant="h4" align="center" className={classes.title}>
            {'«' + name + '»'}
          </Typography>
        <div
          className={classes.text}>
          {description.map((paragraph, index) => (
            <Grid item key={index}>
              <Typography
                component="h4"
                variant="h6"
                gutterBottom
                className={classes.description}>
                {paragraph}
              </Typography>
            </Grid>
          ))}
        </div>
        </section>
    </Dialog>
  );
}

export default CardDialogue;
