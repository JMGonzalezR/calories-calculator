import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopPanel from './containers/TopPanel'

function App() {
  return (
    <div className="App">
      <TopPanel/>
       <Router>
          <LeftPanel open={this.state.open} handleDrawerClose={this.handleDrawerClose}/>
          
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/interviews" exact component={InterviewsGrid} />
                <Route path="/candidates" exact component={CandidatesGrid} />
                <Route path="/interviewers" exact component={InterviewersGrid} />
              </Switch>
            
            <div className={classes.tableContainer}>
              
            </div>
          </main>
        </Router>
    </div>
  );
}

export default App;
