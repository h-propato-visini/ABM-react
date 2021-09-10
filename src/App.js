import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Agregar from './Agregar';
import Modificar from './Modificar';
import Users from './Users';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={Users}/>
        <Route path='/add' component={Agregar}/>
        <Route path='/modify/:id' component={Modificar}/>
      </Router>
    )
  }
}

export default App
