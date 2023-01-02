import { PureComponent } from 'react'

class PureCounterComponent extends PureComponent {

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
    console.log('This is the Pure component')
    return (
      <div>
        <h1>Pure Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleToggle()}>Set Toggle</button>
        <button onClick={() => this.incCounter()}>Counter</button>
      </div>
    )
  }
}

export default PureCounterComponent