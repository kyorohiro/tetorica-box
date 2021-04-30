import React from 'react'
import { render} from 'react-dom'

const Hello = props => <p> Hello</p>;

const rootElement = document.getElementById("root")
render(<Hello/>, rootElement)
