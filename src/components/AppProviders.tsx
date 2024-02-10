import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'src/theme';
import store from 'src/store';

type Props = {
  children: ReactNode;
};

function AppProviders({ children }: Props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
}

export default AppProviders;
