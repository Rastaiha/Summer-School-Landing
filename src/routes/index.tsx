import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from '../pages/Landing';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};
export default Root;
