import React from 'react';
import Todo from './Todo.jsx';

const Outputcomponent = (props) => {
    return (
        <div className="col-lg-8">
            <div className="card">
                <h8 className="card-header">View To-Do Items:</h8>
                <div className="card-body" name="outputDiv">
                    {
                        props.list.length === 0 ?
                            <div className="mt-3">
                                <h5><strong>Welcome to Very Simple Todo App</strong></h5>
                                <p>Get started now by adding a new todo to the left</p>
                            </div>
                            :
                            <ul className="list-unstyled">{props.list.map((listItem, index) => <Todo key={index} index={index} description={listItem.description} priority={listItem.priority} updatetodoList={props.updatetodoList} handleDeleteButton={props.handleDeleteButton}></Todo>)}</ul>
                    }
                </div>
            </div>
        </div>
    );
}
export default Outputcomponent;

/*<div className="col-lg-8">
            <div className="card">
                <div name="outputDiv" className="alert alert-dark card-header bg-light">
                    <h4 className="card-text">View Todos</h4>
                </div>
                <div>
                    <h5 className="card-text">Wecome to very simple to do app</h5>
                    <div name="output" className="update-todo-text" type="text" id="todos" placeholder="todo or not todo"></div>
                    <p className="card-text">Get started now by adding a new todo on the left</p>
                    <ul>{props.list.map(todo => <li>{todo.description}</li>)}</ul>
                </div>
            </div>
        </div>*/