import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increament() {

        this.setState({

            count: this.state.count + 1
        }, () => {
            console.log('Callback value', this.state.count)
        }
        )
 
        console.log(this.state.count)

    }

    render() {
        return (
            <div>
                Count :- {this.state.count}

                <button onClick={() => this.increament()}>Add</button>

            </div>
        )
    }
}

export default Counter
