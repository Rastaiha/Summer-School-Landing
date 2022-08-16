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
} from '@mui/material';
import MentorIntroduction from '../Dialog/MentorIntroduction';

const PersonCard = ({ person }) => {
  const [isDialogueOpen, setDialogueOpen] = useState(false);
  let position = '';
  let introduction = (
    <>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => setDialogueOpen(!isDialogueOpen)}>
          او کیست؟!
        </Button>
      </CardActions>
      <MentorIntroduction
        person={person}
        open={isDialogueOpen}
        handleClose={() => {
          setDialogueOpen(!isDialogueOpen);
        }}
      />
    </>
  );
  if (person.position) {
    position = (
      <Typography variant="body2" color="textSecondary" component="p">
        {person.position}
      </Typography>
    );
  }
  if (person.description === 'none') {
    introduction = "";
  }
  return (
    <>
      <Card
        sx={{
          fontSize: '1rem',
          textDecoration: 'none',
          overflow: 'hidden',
          transition: 'transform 0.1s ease-in-out',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',



          height: '100%',
          width: '100%',
          maxWidth: '20rem',
          fontSize: '1rem',
          textDecoration: 'none',
          overflow: 'hidden',
          boxShadow: '0 0 1px 0rem rgba(0, 0, 0, 0.5)',
          // boxShadow: '0 0 2rem -1.5rem rgba(0, 0, 0, 0.5)',
          transition: 'transform 0.1s ease-in-out',
          '&:hover': {
            transform: 'translateY(-0.2rem) scale(1.02)',
            boxShadow: '0 0.5em 0.5rem -0.5rem rgba(0, 0, 0, 0.5)',
          },
          background: '#eaf6ff',
        }}>
        <CardActionArea disabled>
          <CardMedia
            sx={{ height: '300px' }}
            image={person.picture}
            title={person.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {person.name}
            </Typography>
            {/* {person.team.map((team) => (
              <>
                <Typography variant="body2" color="textSecondary" component="p">
                  {team}
                </Typography>
              </>
            ))} */}
            {position}
          </CardContent>
        </CardActionArea>
        {introduction}
      </Card>
    </>
  );
};

export default PersonCard;
