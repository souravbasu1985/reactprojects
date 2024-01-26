import React, { Component } from 'react'

class Counter extends Component {
  
  constructor(props)
  {
    super(props)
    this.state = {counter:0}
  }
  incrementCounter()
  {
    this.setState()
  }
  
  
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={()=>this.incrementCounter()}>Click me</button>
      </div>
    )
  }
}

export default Counter
