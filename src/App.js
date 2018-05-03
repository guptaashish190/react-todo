import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <TodoElement/>
    );
  }
}

class TodoElement extends Component {

  render(){
    return(

      <div className="todo-element"><span>Oh yeah</span></div>
    );
  }
}

export default App;
