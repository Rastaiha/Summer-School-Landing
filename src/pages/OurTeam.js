import '../styles/OurTeam.css';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PersonCard from '../components/Cards/PersonCard';
import { baseURL } from "../configs/network/static";

function OurTeam() {
  const [members, setMembers] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://summerschool.darkube.app/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(data => {
        setMembers(data.members);
        setTeams(data.teams);
      })
  }, [])
  return (
    <Box
      sx={{
        paddingY: { xs: 2, sm: 0 },
        zIndex: -1,
        backgroundImage: `url(${process.env.PUBLIC_URL}background_lines2.png)`,
        backgroundColor: "#0F2E47",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          alignItems='center'
          justifyContent='space-evenly'
          sx={{ height: '100vh' }}>
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
              borderRadius: "30px",
              alignContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {'دست اندر کاران'}
          </Typography>
          <div className="our-team-page">
            <div className="tab-wrap">
              {teams.map((team, index) => (
                <>
                  <input
                    type="radio"
                    id={'tab' + index}
                    name="tabGroup1"
                    className="tab"
                    defaultChecked={index === 0 ? 'checked' : ""}
                  />
                  <label htmlFor={'tab' + index}>{team}</label>
                </>
              ))}
              {teams.map((team) => (
                <div className="tab__content" key={team}>
                  <Grid container spacing={2} justifyContent="flex-start" alignItems='center'>
                    {members
                      .filter((member) => member.team.includes(team))
                      .map((member, index) => (
                        <Grid
                          container
                          item
                          key={index}
                          xs={12}
                          sm={6}
                          md={3}
                          alignItems="center"
                          justifyContent="center">
                          <PersonCard person={member} />
                        </Grid>
                      ))}
                  </Grid>
                </div>
              ))}
            </div>
          </div>
        </Stack>
      </Container>
    </Box>
  );
}

export default OurTeam;
