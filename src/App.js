import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodoDescription: ''
    };
      this.deleteTodo = this.deleteTodo.bind(this);

  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.state.newTodoDescription) {return}
    const newTodo = { id: this.state.todos.id, description:this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  toggleComplete(index) {
   const todos = this.state.todos.slice();
   const todo = todos[index];
   todo.isCompleted = todo.isCompleted ? false : true;
   this.setState({todos: todos });
 }

 deleteTodo(id) {
   const remainingToDos = this.state.todos.filter((todo, remainingToDos) => {
     return (todo.id !== remainingToDos.id)
   });
   this.setState({ todos: remainingToDos });

}

  render() {
    return (
      <div className="App">
        <h1>Add a ToDo!</h1>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" value="Add Todo" />
          </form>
        <ul>
          { this.state.todos.map( (todo,) =>
            <ToDo key={ todo.id } description= {todo.description} isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(todo) } onDelete={ this.deleteTodo }  />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
