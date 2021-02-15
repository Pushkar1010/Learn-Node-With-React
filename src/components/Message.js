import React, {Component} from 'react'


class Message extends Component {

    constructor(){
        super()
        this.state = {

            msg: 'Welcome React'

        }
    }

    changeMsg(){

        this.setState({
            msg: 'Thank you'
        })
    }

    render(){

        return (
            <div>

            <h1>{this.state.msg}</h1>
            <button onClick={() => this.changeMsg()}>Subscribe</button>
            </div>
        )
    }

}

export default Message;