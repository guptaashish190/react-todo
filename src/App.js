import React, { Component } from 'react';

class App extends Component {

  id = 0;

  state = {
    todos : [ {
      title: "1st title",
      content: "content1",
      id: this.id++,
    },
    {
      title: "2st title",
      content: "content2",
      id: this.id++,
    }]
  }

  removeTodo = (id)=>{

    this.setState({todos : this.state.todos.filter((todo)=> todo.id !== id  )});
  }

  updateTodo = (title,content,id)=>{
    var currentTodos = this.state.todos;

    currentTodos = currentTodos.map((todoItem)=>{
      return todoItem.id === id ? {title: title, content: content, id: id} : todoItem;
    });

    this.setState({todos: currentTodos});
  }

  addTodo = ()=>{
    var currentTodos = this.state.todos;

    console.log("clicked");

    currentTodos.push({
        title: "Title",
        content : "Content",
        id : this.id++
     });

     this.setState({
       todos: currentTodos
     });
  }

  render() {
    return (
      <div>
        <Intro/>
        <div className="container">
      
        <img className="add-img" src="images/add.png" onClick ={this.addTodo}/>
        <div className="todo-list-container">
          {this.state.todos.map((todo) => <TodoElement id= {todo.id} updateTodo = {this.updateTodo} removeTodo={this.removeTodo} key={todo.id} title = {todo.title} content = {todo.content}></TodoElement>)}
        </div>
      </div>
        </div>
      
    );
  }
}

class TodoElement extends Component {

  state = {
    editing: false,
    title: this.props.title,
    content: this.props.content
  }

  removeTodo = (id)=> {
    this.props.removeTodo(id);
  }

  updateTodo = ()=>{

    this.props.updateTodo(this.state.title,this.state.content,this.props.id);
    this.setState({editing: false,title: this.state.title, content: this.state.content});
  }

  render(){
    return(
      <div className="todo-element">
        <div className = "title">
          {this.state.editing ? <input onChange ={(e)=>this.setState({editing:true,title:e.target.value,content: this.state.content})} value = {this.state.title} type = "text"/> : <span>{this.props.title}</span>}
            
          <img onClick={()=>this.removeTodo(this.props.id)} src="images/close-window.png" width = "17px" height = "17px"/>
        </div>
        <div className="content-container">
        {this.state.editing ? <textarea value={this.state.content} onChange ={(e)=>{this.setState({editing:true,title:this.state.title,content: e.target.value})}}></textarea> : <div className="mainContent">{this.props.content}</div>}
          {this.state.editing ? <img src = "images/save.png" onClick = {()=>this.updateTodo()}/> : <img src="images/edit-icon.png" onClick = {()=>this.setState({editing: true})}/>}
        </div>
      </div>
    );
  }
}


class Intro extends Component {
  state = {
    animation: true
  }

  render(){
    return(
      <div className="intro-container">
        <div className="welcome-text">
          Welcome
        </div>
      </div>
    );
  }

}

export default App;
