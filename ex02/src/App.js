import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  render(){
    return (
    <div className="App">
      <input type="button" value="Set Storage" onClick={this.setMyStorage} />
      <input type="button" value="Set Storage" onClick={this.getMyStorage} />
    </div>
    )
  }

  setMyStorage = () => {
    document.cookie = {"Year": "2021"};
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  }

  getMyStorage = () => {
    document.cookie = {"Year"};
    localStorage.getItem("Paragon");
    sessionStorage.getItem("frontend");
  }
}

export default App;
