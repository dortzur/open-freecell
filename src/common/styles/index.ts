import { css } from 'styled-components';
import { modularScale } from 'polished';
import { createMuiTheme } from '@material-ui/core';


export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});


const margin = modularScale(7.2);
export const getCardsGrid = (count: Number) => css`
  justify-content: center;
  display: grid;
  grid-template-columns:${ [...Array(count).keys()].map(() => `${margin} `)};
  //grid-template-rows: 25% 100px auto;
`;
