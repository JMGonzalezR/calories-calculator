import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <footer className="Footer">
      <div className="Footer-body">
        
      <nav className="Footer-nav">
          <Link to="#" className="Footer-link">Story</Link>
          <Link to="#" className="Footer-link">Products</Link>
      </nav>
        <p className="Footer-copyright">Copyright ©2020 Juan Gonzalez</p>
       
      </div>
        <p className="Footer-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut eleifend porttitor quam, quis venenatis lectus pretium eu. 
        Praesent eget nunc ut orci dignissim porta. Phasellus consequat sed purus sit amet pretium.
        </p>
    </footer>
  );
}

export default App;