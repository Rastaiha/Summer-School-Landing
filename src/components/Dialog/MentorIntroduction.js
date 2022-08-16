import {
  Dialog,
  Grid,
  Hidden,
  Typography,
  DialogContent,
} from '@mui/material';
import React from 'react';


function MentorIntroduction({
  open,
  handleClose,
  person
}) {
  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
      <Grid container justify='center' alignItems='center'>
        <Grid xs={12} sm={6} container item direction='column' justify='center'>
          <Grid item>
            <Typography gutterBottom variant="h4" align="center">
              {person.name}
            </Typography>
          </Grid >
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                padding: '10px',
                align: 'left',
                textAlign: 'justify',
              }}>
              {person.description}
            </Typography>
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid
            sm={6}
            item
            sx={{
              height: '300px',
              background: `url(${person.picture})`,
              backgroundSize: 'cover !important',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              boxShadow: '2px 2px 5px gray',
            }} />
        </Hidden>
      </Grid>
    </Dialog >
  );
}


export default MentorIntroduction;