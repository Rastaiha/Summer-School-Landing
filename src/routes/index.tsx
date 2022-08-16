import React from 'react';
import { Route, Routes } from 'react-router-dom';

import OurTeam from '../pages/OurTeam';
import Landing from '../pages/Landing';

const Root = () => {
  return (
    <Routes>
      <Route path="/our-team/" element={<OurTeam />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};
export default Root;
