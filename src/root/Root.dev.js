import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MiniGames from '../components/MiniGames';
import SummerSchoolLanding from '../containers/SummerSchool';

const Root = () => {
  return (
    <Switch>
      <Route path="/game/:gameId" component={MiniGames} />
      <Route path="/" component={SummerSchoolLanding} />
    </Switch>
  );
};
export default Root;
