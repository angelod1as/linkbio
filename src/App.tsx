import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App = () => (
  <Router basename="/linkbio/">
    <Routes />
    <GlobalStyle />
  </Router>
);

export default App;
