import { Component } from 'react'

class SimpleCounterComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count : 0,
        bool : false
      }
    }
    
    handleToggle(){
        if(this.state.bool) {
            this.setState({
                bool : false
            })
        }
        else {
            this.setState({
                bool : true
            })
        }
    }

    incCounter() {
        if(this.state.bool) {
            this.setState({
                count : this.state.count+1
            })
        }
    }

  render() {
    console.log('This is the simple component')
    return (
      <div>
        <h1>Simple Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleToggle()}>Set Toggle</button>
        <button onClick={() => this.incCounter()}>Counter</button>
      </div>
    )
  }
}

export default SimpleCounterComponent
