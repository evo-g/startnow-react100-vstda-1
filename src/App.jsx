import React, { Component } from 'react';
import Inputcomponent from './Inputcomponent.jsx';
import Outputcomponent from './Outputcomponent.jsx';
import Todo from './Todo.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.updatetodoList = this.updatetodoList.bind(this);
    this.addTodoHandler = this.addTodoHandler.bind(this);
    //this.saveButton = this.saveButton.bind(this);
    //this.updateTodo = this.updateTodo.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  updatetodoList(todo, index) {
    var newArray = this.state.todoList;
    newArray.splice(index, 1, todo)
    this.setState({
      todoList: newArray
    }, () => console.log(this.state.todoList))
  }

  addTodoHandler(todo) {
    //step 1 make copy of Todo list array
    var todoListCopy = [...this.state.todoList];
    //step 3 push Todo item obeject from step 2 into Todo list array copy from step 1
    todoListCopy.push(todo)
    //step 4 replace list in state with modified todo list array from step 3
    this.setState({
      todoList: todoListCopy
    })
  }
  handleDeleteButton(index) {
    var newArray = this.state.todoList;
    newArray.splice(index, 1)
    this.setState({
      todoList: newArray
    }, () => console.log(this.state.todoList))
  }
  // updateTodo(editTodo) {
  //   var newToDoList = [...this.state.todoList];
  //   newToDoList.push(todo);
  //   this.setState({ todoList: newToDoList });
  // }
  // saveButton(key, description, priority) {
  //     var newTodoState = [...this.state.todoList.slice()];       
  //        this.setState({todoList: newTodoState});
  // }

  render() {
    return (
      <div className='container'>
        <header className="white page-header">
          <h1>Very Simple To-Do App</h1>
          <h3>Track all of the things</h3>
        </header>
        <div className="row">
          <Inputcomponent
            addTodoHandler={this.addTodoHandler}
          />
          <Outputcomponent
            list={this.state.todoList}
            updatetodoList={this.updatetodoList}
            handleDeleteButton={this.handleDeleteButton}
          />
        </div>
      </div>
    );
  }
}

export default App;

