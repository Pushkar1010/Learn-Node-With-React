import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('clicked')
    }

    return (
        <div>
            <br></br>
            <br></br>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick;
