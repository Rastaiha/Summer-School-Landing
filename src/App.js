import './configs/styles/App.css';

import React, { useEffect } from 'react';
import { CssBaseline, LinearProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { CacheProvider } from "@emotion/react";
import { useNavigate } from 'react-router-dom';
import CreateEmotionCache from './configs/CreateEmotionCache'
import SelectTheme from './configs/themes';
import Root from './routes';


const App = ({ dir = 'rtl' }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.dir = 'rtl';
  }, []);

  return (
    <CacheProvider value={CreateEmotionCache('rtl')}>
      <ThemeProvider theme={SelectTheme('rtl')}>
        <CssBaseline />
        <Root />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
