import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import { cardData } from './data';
import { tabData } from './data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardData,
      tabData,
    }
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <Header />
        <Content 
        cards={this.state.cardData}
        tabs={this.state.tabData}/>
      </div>
    );
  }
}

export default App;
