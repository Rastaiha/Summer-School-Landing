import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutUs from '../containers/AboutUs';
import OurTeam from '../containers/OurTeam';
import SummerSchoolLanding from '../containers/SummerSchool';


const Root = () => {
  return (
    <Switch>
      <Route path="/about_us" component={AboutUs} />
      <Route path="/our_team" component={SummerSchoolLanding} />
      <Route path="/" component={SummerSchoolLanding} />
    </Switch>
  );
};
export default Root;
