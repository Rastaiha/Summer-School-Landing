import './configs/styles/App.css';

import React, { useEffect } from 'react';
import { CssBaseline, LinearProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { CacheProvider } from "@emotion/react";
import { useNavigate } from 'react-router-dom';
import createEmotionCache from './configs/createEmotionCache'
import selectTheme from './configs/themes';
import Root from './routes';


const App = ({ dir = 'rtl' }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.dir = 'rtl';
  }, []);

  return (
    <CacheProvider value={createEmotionCache('rtl')}>
      <ThemeProvider theme={selectTheme('rtl')}>
        <CssBaseline />
        <Root />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
