import { ButtonClassKey, darken, StyleRules } from '@material-ui/core';

export const buttonTheme: Partial<StyleRules<ButtonClassKey, { }>> = {
  contained: {
    padding: '2px 10px',
    color: '#fafafa',
    backgroundColor: '#a837dc',
    '&:hover': {
      backgroundColor: darken('#a837dc', 0.3),
    },
  },
};
