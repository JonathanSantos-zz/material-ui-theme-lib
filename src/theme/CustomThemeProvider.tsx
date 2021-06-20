import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { buttonTheme } from './button';
import { cardTheme } from './card';
import { colorTheme } from './color';
import { inputTheme } from './input';

const customTheme = createMuiTheme({
  palette: colorTheme,
  overrides: {
    MuiButton: buttonTheme,
    MuiInput: inputTheme,
    MuiCard: cardTheme,
  },
});

export const CustomThemeProvider = ({ children }) => <ThemeProvider theme={customTheme}>{ children }</ThemeProvider>;
