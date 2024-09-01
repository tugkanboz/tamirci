import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TechnicianList from './pages/TechnicianList';
import TechnicianDetail from './pages/TechnicianDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/technicians" component={TechnicianList} />
          <Route path="/technician/:id" component={TechnicianDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;