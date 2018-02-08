import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [],
      newToDoDescription: ""
    };
  }

  handleChange(e){
    this.setState( { newToDoDescription: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.state.newToDoDescription) { return };
    const newToDo = { description: this.state.newToDoDescription, isCompleted: false };
    this.setState( { todos: [...this.state.todos, newToDo], newToDoDescription: "" });
  }

  toggleComplete(index){
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState( { todos:todos } );
  }

  deleteToDo(index){
    const toDelete = this.state.todos[index];
    const remainingTodo = this.state.todos.filter( todo => todo !== toDelete );
    this.setState( { todos: remainingTodo } );
  }

  render() {
    return (
      <div className="App">
      <h1>Add a Todo list</h1>
        <form onSubmit = { (e) => this.handleSubmit(e) }>
          <input type="text" value = { this.state.newToDoDescription } onChange = { (e) => this.handleChange(e) } />
          <input type="submit" value="Add"/>
        </form>
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key = { index } description = { todo.description } isCompleted = { todo.isCompleted } toggleComplete = { () => this.toggleComplete(index) } deleteToDo = { () => this.deleteToDo(index) }/>
          )}
        </ul>



      </div>
    );
  }
}

export default App;
