import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';
import Example from 'pages/Example';
import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import "assets/scss/style.scss";

function App() {
  return <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/example" component={Example} />
        <Route exact path="/properties/:id" component={DetailsPage} />
      </Switch>
    </div>;
}

export default App;
