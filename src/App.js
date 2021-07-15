import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    return (
      <div className="text-center wrapper">
        <div className="mb-30">
            <h1>Monster Friends</h1>
          </div>
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;
