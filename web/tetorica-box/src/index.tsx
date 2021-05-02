import React from 'react'
import ReactDom from 'react-dom'
import './style.css'

const Hello = React.createElement('p',{},'Hello React!!')
const rootElement = document.getElementById("root")
ReactDom.render(Hello, rootElement)


