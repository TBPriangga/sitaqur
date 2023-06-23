import React, { Component } from 'react';
import Header from 'parts/Header';
import landingPage from './landingPage.json';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';

export default class LandingPage extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero}/>
        <MostPicked data={landingPage.mostPicked}/>
      </>
    );
  }
};