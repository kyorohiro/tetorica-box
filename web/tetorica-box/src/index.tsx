import React from 'react'
import ReactDom from 'react-dom'
//import './style.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//import 'bootstrap/dist/js/popper.min.js';
//global.jQuery = require('jquery');

(global as any).jQurey = require('jquery');
const Hello = React.createElement('h4', { className: 'alert alert-primary' }, 'Hello React!!')
const rootElement = document.getElementById("root")
ReactDom.render(Hello, rootElement)


