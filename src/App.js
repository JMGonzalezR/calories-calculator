import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from './pages/HomePage';
import TopPanel from './containers/TopPanel';
import Footer from './containers/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      <TopPanel />
        <main className="App-main"> 
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </main>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
