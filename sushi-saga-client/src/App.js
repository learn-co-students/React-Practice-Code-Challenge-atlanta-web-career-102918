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
    budget: 100
  }

  fetchSushi = () => {
    fetch(API)
    .then(response => response.json())
    .then(json => this.setState({ sushi: json }))
  }

  buySushi = (sushi) => {
    let newSushi = this.state.sushi.map(x => {
      return x.id === sushi.id ? Object.assign(x, {eaten: true}) : x
    })
    
    if(sushi.price <= this.state.budget) {
      this.setState({
        budget: this.state.budget - sushi.price,
        sushi: newSushi
       })
    }
  }

  componentDidMount(){
    this.fetchSushi()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.state.sushi} buySushi={this.buySushi} />
        <Table budget={this.state.budget} sushi={this.state.sushi} />
      </div>
    );
  }
}

export default App;
