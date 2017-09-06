import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        Esta es la página {title}.
      </p>
      <p>
        <Link to="/">Inicio</Link>
      </p>
      <p>
        <Link to="/about">Nosotros</Link>
      </p>
      <p>
        <Link to="/settings">Configuración</Link>
      </p>
    </div>
);

const Home = (props) => (
  <Page title="Inicio"/>
);

const About = (props) => (
  <Page title="Nosotros"/>
);

const Settings = (props) => (
  <Page title="Configuraciones"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
      </Router>
    );
  }
}

export default App;