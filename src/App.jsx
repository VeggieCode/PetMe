import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import './App.css';
import MenuCabecera from './components/MenuCabecera';
import MenuLateral from './components/MenuLateral';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
  return (
    <div className="App">
      <Router>
        <MenuCabecera />
        <MenuLateral />        
        <Switch>
          <Route exact path="/login"><Login layoutPosition="main"/></Route>
          <Route exact path="/signup"><Registro layoutPosition="main"></Registro></Route>
          <Route exact path="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
