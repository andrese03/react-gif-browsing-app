import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GifsPage from './pages/GifsPage';

const About = () => (<div>Hola Mundo</div>);

// eslint-disable-next-line arrow-body-style
const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={GifsPage} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
