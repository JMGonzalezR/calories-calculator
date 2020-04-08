import React from 'react';
import './TopPanel.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <header className="TopPanel">
      <div className="TopPanel-body">
        <h3 className="TopPanel-h3">Calories Calculator</h3>
        <nav className="TopPanel-nav">
          <Link to="#" className="TopPanel-link">Story</Link>
          <Link to="#" className="TopPanel-link">Products</Link>
        </nav>
      </div>

    </header>
  );
}

export default App;