import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Button,
  CardActions,
} from '@material-ui/core';
import MentorIntroduction from '../Dialog/MentorIntroduction'

const useStyles = makeStyles({
  root: {
    // height: '100%',
    width: '100%',
    maxWidth: '20rem',
    fontSize: '1rem',
    textDecoration: 'none',
    overflow: 'hidden',
    boxShadow: '0 0 2rem -1.5rem rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.1s ease-in-out',
    '&:hover': {
      transform: 'translateY(-0.2rem) scale(1.02)',
      boxShadow: '0 0.5em 0.5rem -0.5rem rgba(0, 0, 0, 0.5)',
    },
    background:'#e9e2c6'
  },
  media: {
    height: '300px',
  },
  icon: {
    textAlign: 'center',
  },
});

const PersonCard = ({
  person
}) => {
  const classes = useStyles();
  const [isDialogueOpen, setDialogueOpen] = useState(false);
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea disabled>
          <CardMedia
            className={classes.media}
            image={`http://utility.rastaiha.ir${person.Picture}`}
            title={person.Name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {person.Name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {person.Team}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button fullWidth variant='contained' color='secondary' onClick={() => setDialogueOpen(!isDialogueOpen)}>
            او کیست؟!
          </Button>
        </CardActions>
      </Card>
      <MentorIntroduction
        person={person}
        open={isDialogueOpen}
        handleClose={() => { setDialogueOpen(!isDialogueOpen) }}
      />
    </>
  );
};

export default PersonCard;
