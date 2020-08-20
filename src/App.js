import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import About from './components/about'
import Contact from './components/contact'
import Experience from './components/experience'
import Home from './components/home'

function App() {
  return (
    
    <div className="App">
      
      <div className="App-header">
        <div  style={{justifyContent:"left", marginLeft:"10px"}}>
          <h1 className="h1-header">Rohan Koduri</h1>
        </div>
        
        <div style={{justifyContent: "flex-end"}}>
        <a className="a-header" href='/contact'>Contact Me</a>
        
          <a className="a-header" href="/about">About Me</a>
          <a className="a-header" href="/experience">My Experience</a>
          <a className="a-header" href="/">Home</a>
        </div>
      </div>
      <div className='App-body'> 
      <Router>
        <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/experience" component={Experience} />
              <Route
                component={() => {
                  return <Redirect to="/" />;
                }}
              />
          </Switch>
        </Router>
      </div>
       <div className='App-footer'>

       </div>

    </div>
  );
}

export default App;