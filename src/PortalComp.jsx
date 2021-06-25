import React, { Component } from 'react'

export default class PortalComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="portal" ref={this.props.reffing} />
            </div>
        )
    }
}
