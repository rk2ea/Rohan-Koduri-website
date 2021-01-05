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

          <a className="a-header" href="/Rohan-Koduri-website/contact">Contact Me</a>
          <a className="a-header" href="/Rohan-Koduri-website/about">About Me</a>
          <a className="a-header" href="/Rohan-Koduri-website/experience">My Experience</a>
          <a className="a-header" href="/Rohan-Koduri-website">Home</a>

        </div>
      </div>
      <div className='App-body'> 
      <Router basename="/Rohan-Koduri-website">
        <Switch>
              <Route path="/Rohan-Koduri-website/" exact component={Home}/>
              <Route path="/Rohan-Koduri-website/about" component={About} />
              <Route path="/Rohan-Koduri-website/contact" component={Contact} />
              <Route path="/Rohan-Koduri-website/experience" component={Experience} />
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

/*
          <Router>
          <Link className="a-header" to='/contact'>Contact Me</Link>
          <Link className="a-header" to="/about">About Me</Link>
          <Link className="a-header" to="/experience">My Experience</Link>
          <Link className="a-header" to="/">Home</Link>
          </Router>
          */