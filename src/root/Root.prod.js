import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MiniGames from '../components/MiniGames';
import Article from '../containers/Article';
import PhysicsDayLanding from '../containers/PhysicsDay';

const Root = () => {
  return (
    <Switch>
      <Route path="/game/:gameId" component={MiniGames} />
      <Route path="/article/:articleId" component={Article} />
      <Route path="/" component={PhysicsDayLanding} />
    </Switch>
  );
};
export default Root;
