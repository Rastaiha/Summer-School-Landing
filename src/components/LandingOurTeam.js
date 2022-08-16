import {
  Button,
  Grid,
  Typography,
} from '@mui/core';
import React from 'react';
import { useTranslate } from 'react-redux-multilingual/lib/context';
import { Link } from 'react-router-dom';

import getRandomSubarray from '../../../utils/getRandomSubarray';
import PersonCard from '../../Cards/PersonCard';


function OurTeam({ members = [], count = 4 }) {
  const t = useTranslate();

  if (members.length === 0) return <></>;

  return (
    <>
      <Typography component="h2" variant="h2" gutterBottom>
        کیا قراره توی این رویداد همراهمون باشن؟
      </Typography>
      <Grid container spacing={4} justify="center" >
        {getRandomSubarray(members, count).map((member, index) => (
          <Grid
            container
            item
            xs={10}
            sm={4}
            md={3}
            key={index}
            justify="center"
          >
            <PersonCard
              person={member}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        sx={(theme) => ({
          margin: theme.spacing(2, 'auto', 0),
          textAlign: 'center',
          display: 'table',
        })}
        className={classes.moreButton}
        component={Link}
        target="_blank"
        rel="noopener"
        to="/our_team"
        style={{ backgroundColor: "#e8332a", color: "white" }}
      >
        {t('seeMore')}
      </Button>
    </>
  );
}

export default OurTeam
