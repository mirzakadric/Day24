import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  render(){
    return (
    <div className="App">
      <input type="button" value="Set Storage" onClick={this.setLocalStorage} />
      <input type="button" value="Get Storage" onClick={this.getLocalStorage} />
    </div>
    )
  }

  setLocalStorage = () => {
    localStorage.setItem('Arena', 'Selection Month');
  }

  getLocalStorage = () => {
    var myLocalStorageData = localStorage.getItem('Arena');
    return myLocalStorageData;
  }
}

export default App;
