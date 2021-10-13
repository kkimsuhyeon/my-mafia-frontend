import React from 'react';
import { ThemeProvider } from 'styled-components';

import { createGlobalStyle } from 'styled-components';

const ResetStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: 'NanumSquareRound', sans-serif;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    text-underline-offset: 4px;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input:focus, button:focus, select:focus {
    outline: none;
  }
  button {
    cursor: pointer;
    border: none;
    &:disabled {
      cursor: not-allowed;
    }
  }
  select, input {
    color: inherit;
  }
  input{
    &:disabled{
      cursor: not-allowed;
    }
  }
`;

export const palette = { white: 'white', black: 'black' } as const;

function StyledThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={palette}>
      <ResetStyle />
      {children}
    </ThemeProvider>
  );
}

export type Palette = typeof palette;

export { StyledThemeProvider as ThemeProvider };
