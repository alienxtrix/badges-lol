import React from 'react';
import ReactDOM from 'react-dom';
// import Badge from './components/Badge.js';
import BadgeNew from './pages/BadgeNew.js';
// import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badges from './pages/Badges.js';


const container = document.getElementById('app');
ReactDOM.render(
  // <Badge champion="Shaco" rol="Asesino"/>,
  <Badges />,
  container);

