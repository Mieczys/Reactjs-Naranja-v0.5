import React from 'react';
import './Styles/App.css';
import { Link, Route, Router } from 'react-router';
import Login from './Pages/Login';
import Productos from './Pages/Productos';
import Tienda from './Pages/Tienda';
import Home from './Pages/Home';

function App() {
  return (
    <>
    <div class="col-sm-12 col-lg-4">
      <Route path='/' exact component={Home}></Route>
      <Route path='/login' exact component={Login}></Route>
      <Route path='/tienda' exact component={Tienda}></Route>
      <Route path='/tienda/:id' component={Productos}></Route>
      </div>
    </>
  );
}

export default App;
