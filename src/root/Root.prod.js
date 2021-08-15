import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SummerSchoolLanding from '../containers/SummerSchool';
import AboutUs from '../containers/AboutUs';
import OurTeam from '../containers/OurTeam';
import MiniGames from '../components/MiniGames';


const Root = () => {
  return (
    <Switch>
      <Route path="/game/:gameId" component={MiniGames} />
      <Route path="/" component={SummerSchoolLanding} />
      <Route path="/about_us" component={AboutUs} />
      <Route path="/our_team" component={OurTeam} />
    </Switch>
  );
};
export default Root;
