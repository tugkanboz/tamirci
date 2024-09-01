import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TechnicianList from './pages/TechnicianList';
import ServiceList from './pages/ServiceList';
import Register from './pages/Register';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/technicians" component={TechnicianList} />
            <Route path="/services" component={ServiceList} />
            <Route path="/register" component={Register} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;