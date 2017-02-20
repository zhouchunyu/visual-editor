import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator.js'
import GaeaEditor from 'gaea-editor'
import webBaseComponents from 'gaea-web-components'
import CustomComponent from './custom-component'

const customComponentArray: Array<FitGaea.Component> = [CustomComponent]

const saveInfo = `{...}`

class App extends Component {
  render() {
    // Menu components are divided into common and custom, if you like, you can remove the common components
    // However, if there is no gaeaUniqueKey called gaea-layout, or a new outer container is defined by `rootLayoutComponentUniqueKey`, view area rendering will block
    return (
        <div style={{ height: 500 }}>
            <GaeaEditor commonComponents={webBaseComponents} customComponents={customComponentArray} />
        </div>
    )
  }
}

export default App;
