import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"




class App extends Component {
  //update budget - check
  //add to list of eaten sushi
  state = {
    sushi: [],
    budget: 100,
    eaten: []
  }

  fetchSushi = () => {
    fetch(API)
    .then(response => response.json())
    .then(json => this.setState({ sushi: json }))
  }

  buySushi = (sushi) => {
    if(sushi.price <= this.state.budget) {
      this.setState({
        budget: this.state.budget - sushi.price,
        eaten: this.state.eaten.concat(sushi)
       })
    }
  }

  componentDidMount(){
    this.fetchSushi()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.state.sushi} buySushi={this.buySushi} eaten={this.state.eaten} />
        <Table budget={this.state.budget} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
