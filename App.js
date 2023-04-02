import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:"IamNEO"
    }
  }
  styles={
    fontStyle:'helvatica',
    color: 'purple',
    fontSize:'30px' 
  };
  ButtonChange=()=>{
    this.setState({
        message:"Welcome to React"
    })
   }
   componentWillMount()
   {
    console.log('Component Will MOUNT!')
   }
   componentDidMount()
   {
    console.log('Component Did MOUNT!')
   }
   componentWillReceiveProps(newProps)
   {
    console.log('Component Will Receive Props!')
   }
   componentWillUpdate(nextProps,nextState)
   {
    console.log('Component Will UPDATE!')
   }
   componentDidUpdate(prevProps,prevState)
   {
    console.log('Component Did UPDATE!')
   }
   componentWillUnmount()
   {
    console.log('Component Will UNMOUNT!')
   }

  render() {
    return (
      <div>
        <center>
        <h1 style={this.styles}>{this.state.message}</h1>
        <button onClick={this.ButtonChange}>Click here!</button>
        </center>
      </div>
    )
  }
}

export default App