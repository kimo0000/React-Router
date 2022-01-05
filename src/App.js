import React from 'react'
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <div className="">
      <Router>
         <Navigation />

           <Switch>
              <Route path='/' component={Home}/>
              <Route path='/About' component={About}/>
              <Route path='/Contact' component={Contact}/>
          </Switch>        
        </Router>

    </div>
  );
}

export default App; 
