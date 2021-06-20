import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { buttonTheme } from './button';
import { cardTheme } from './card';
import { colorTheme } from './color';
import { inputTheme } from './input';

const mamakiTheme = createMuiTheme({
  palette: colorTheme,
  overrides: {
    MuiButton: buttonTheme,
    MuiInput: inputTheme,
    MuiCard: cardTheme,
  },
});

export const MamakiThemeProvider = ({ children }) => <ThemeProvider theme={mamakiTheme}>{ children }</ThemeProvider>;
