import LandingPage from 'pages/LandingPage';
import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import "assets/scss/style.scss";

function App() {
  return <div className="App">
      <Switch>
        <Route path="/" component={LandingPage}></Route>
      </Switch>
    </div>;
}

export default App;
