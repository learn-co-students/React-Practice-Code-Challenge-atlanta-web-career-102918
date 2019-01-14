import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"




class App extends Component {

  state = {
    sushi: []
  }

  fetchSushi = () => {
    fetch(API)
    .then(response => response.json())
    .then(json => this.setState({ sushi: json }))
  }

  componentDidMount(){
    this.fetchSushi()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.state.sushi} />
        <Table />
      </div>
    );
  }
}

export default App;
