// Dependencies
import React, {Component} from 'react';

//Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from "./Global/Footer";

// Data
import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Sequoia" items={items}/>
        <Content/>
        <Footer copyright="&copy; Sequoia 2017"/>
      </div>
    );
  }
}

export default App;
