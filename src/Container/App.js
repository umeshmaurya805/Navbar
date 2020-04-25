import React, { Component } from 'react';
import Nav from './Navbar/Nav';
import {Provider} from 'react-redux';
import store from '../Redux-files/store';

class App extends Component{
  
  render(){

    return (
      <Provider store={store}>

        <div className="App">
          <Nav/>
         
        </div>
        </Provider>

    )
  }
  }

  


export default App;
