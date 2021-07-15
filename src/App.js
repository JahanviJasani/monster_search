import React, {Component} from 'react';
import './App.css';

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
      <div className="App">
        
      </div>
    )
  }
}

export default App;
