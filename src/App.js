import React, { Component } from 'react';
// import GifAppClass from './Components/GifProjectClass/GifAppClass'
import GifAppHooks from './Components/GifProjectHook/GifAppHooks'
import "./assets/css/App.css"

class App extends Component {
  render() {
    return (
      <>
        {/* <GifAppClass /> */}
        <GifAppHooks />
      </>
    );
  }
}

export default App;
