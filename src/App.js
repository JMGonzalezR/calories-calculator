import React from 'react';
import './App.css';
import TopPanel from './containers/TopPanel'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from './pages/HomePage'


function App() {
  return (
    <div className="App">
      <Router>
      <TopPanel />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
