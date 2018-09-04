import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Faq from './faq/Faq';
import '../scss/App.scss';
import 'react-select/dist/react-select.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to React!
        <Faq isCandidat={true}></Faq>
      </div>
    )
  }
}

const wrapper = document.getElementById("reactapp");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
