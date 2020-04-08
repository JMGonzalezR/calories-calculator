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
      <TopPanel />
      <Router>
        <LeftPanel open={this.state.open} handleDrawerClose={this.handleDrawerClose} />

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>

          <div className={classes.tableContainer}>

          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
