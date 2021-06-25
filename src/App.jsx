import './App.css';
import Editor from './Editor';
import React, { Component } from 'react'
import { ForwardindRef } from '../src/Editor'
import Portal from './Portal';
import PortalComp from './PortalComp';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    this.childRef = React.createRef()
    this.portalRef = React.createRef()
  }
  handleClick = () => {
    this.childRef.current.focus()
  }
  portalClick = () => {
    this.portalRef.current.focus()
  }
  render() {
    return (
      <div>
        <ForwardindRef childRef={this.childRef} />
        <Editor childRef={this.childRef} />
        <button onClick={this.handleClick}>focus</button>
        <Portal>
          <PortalComp reffing={this.portalRef} />
        </Portal>
        <button onClick={this.portalClick}>Portal Focus</button>
      </div>
    )
  }
}

