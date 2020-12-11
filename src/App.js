import React, { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import Nav from './layouts/Nav';
import Page from './layouts/Page'


function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Nav />
          <Page />
        </div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
