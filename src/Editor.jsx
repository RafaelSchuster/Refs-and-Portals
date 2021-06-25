import React, { Component } from 'react'

export const ForwardindRef = React.forwardRef((props, ref) => <Editor {...props} childRef={ref} />)

export default class Editor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: {},
            items: [],
            count: 0
        }
        this.nameRef = React.createRef()
        this.categoryRef = React.createRef()

        this.formElements = {

        }
    }
    handleChange = (e) => {
        // this.setState(state => state.msg[e.target.name] = e.target.value)
    }
    handleClick = () => {
        // this.setState({ items: [...this.state.items, this.state.msg.name] }, () => {
        //     this.setState({ msg: '' }, this.nameRef.current.focus())
        // }
        // )
        console.log(this.nameRef.current.value);
        console.log(this.categoryRef.current.value);
        this.setState(state => state.count += 1)
    }
    setElement = (element) => {
        console.log(element);
    }
    getSnapshotBeforeUpdate(props, state) {
        return 'snapppp'
    }
    componentDidUpdate(oldProps, oldState, snapshot) {
        console.log(JSON.stringify(oldProps) + JSON.stringify(oldState) + snapshot);
    }
    render() {
        return (
            <div>
                <label>Name</label>
                <input type="text" ref={this.nameRef} name='name' onChange={this.handleChange} autoFocus={true} value={this.state.msg.name} />
                <label htmlFor="">Category</label>
                <input type="text" ref={this.categoryRef} name='category' onChange={this.handleChange} />
                <input type="text" ref={this.setElement} />
                <input type="text" ref={this.props.childRef} />
                <button onClick={this.handleClick}>Store</button>
                {/* {this.state.items && this.state.items.map(el => {
                    return <div>{el}</div>
                })} */}
                {this.state.count}


            </div>
        )
    }
}
