import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'contexts/theme';

import Root from 'pages/Root';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
