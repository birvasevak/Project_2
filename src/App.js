import React from 'react';
//import logo from './logo.svg';
import './App.css';
//
import { Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import sideDrawer from './components/SideDrawer/SideDrawer';

class App extends Component{
  render(){
    return(
      <div style = {{height: '100%'}}/*className="App"*/>
        <Toolbar />
        <sideDrawer/>
        <main style= {{marginTop:'64px'}}>
          <div className="content">
          <h1 className="heading">Heading 1</h1>
          <h2 className="subheading">
            Subheading</h2>
          </div>
          <p>Page content!</p>
        </main>
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World</h2>
      </div>
      <div className="content">
        <h1 className="heading">Google Fonts in React(heading)</h1>
        <h2 className="subheading">
          Learn how to add fonts in a React Project(Subheading)
        </h2>
        <hr/>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
       </div>
     </div>
    





    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */

export default App;
