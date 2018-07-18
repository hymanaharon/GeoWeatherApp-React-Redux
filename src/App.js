import React, { Component } from 'react';
import './App.css';
import Clock from './components/clock_12'
import Weatherdata from './components/lat_long'
//import Weatherdata from './components/weatherdata'

import { Provider } from 'react-redux';
import store from './store'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div >

              <div className="textBox">
              <div className="time"><Clock /></div>
                <Weatherdata />

              </div>
          </div>
      </div>
    </Provider>
    );
  }
}

export default App;
