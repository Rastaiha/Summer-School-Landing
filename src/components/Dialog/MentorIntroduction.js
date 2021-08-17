import {
  Dialog,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  image: (props) => ({
    background: `url(${props.image})`,
    backgroundSize: 'cover !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    boxShadow: '2px 2px 5px gray',
    height: 'inherit',
  }),
  description: {
    padding: '10px',
    align: 'left',
    textAlign: 'justify',
  }
}));

function MentorIntroduction({
  open,
  handleClose,
  person
}) {
  const image=person.picture
  const classes = useStyles({ image });
  return (
    <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
      <Grid
        style={{ height: '300px' }}
        container
        direction='row'
        justify='center'
        alignItems='center'>
        <Grid xs={12} sm={6} container item direction='column' style={{ height: '100%' }} justify='center'>
          <Grid item>
            <Typography gutterBottom component="h3" variant="h4" align="center">
              {person.name}
            </Typography>
          </Grid >
          <Grid item>
            <Typography component="h4" variant="h6" className={classes.description}>
              {person.description}
            </Typography>
          </Grid>
        </Grid>
        <Hidden xsDown="true">
          <Grid sm={6} item className={classes.image}></Grid>
        </Hidden>
      </Grid>
    </Dialog >
  );
}


export default MentorIntroduction;