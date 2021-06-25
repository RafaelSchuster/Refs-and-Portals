import React, { Component } from 'react'
import reactDom from 'react-dom'

export default class Portal extends Component {
    constructor(props) {
        super(props)
        this.portalBook = document.getElementById('portal-book')

        this.state = {

        }
    }

    render() {
        return (
            reactDom.createPortal(<div> {this.props.children}</div>, this.portalBook)
        )
    }
}
