import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            priority: this.props.priority,
            isEditing: false,
            updatedDesc: ""
        }
        this.highPriority = this.highPriority.bind(this)
        this.onEditClick = this.onEditClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        // this.saveButton = this.saveButton.bind(this)
        // this.handleEditTodo= this.handleEditTodo.bind(this)
        this.handleSaveButton = this.handleSaveButton.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    highPriority() {
        if (this.props.priority == 1) {
            return "alert alert-danger"
        }
        else if (this.props.priority == 2) {
            return "alert alert-warning"
        }
        else {
            return "alert alert-success"
        }
    }

    onEditClick() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, console.log(this.state.description))
    }

    handleSaveButton() {
        var newObj = {
            description: this.state.description,
            priority: this.state.priority
        }
        this.props.updatetodoList(newObj, this.props.index);
        this.onEditClick();
    }

    handleDelete() {
        this.props.handleDeleteButton(this.props.index)
    }
    // saveButton(e){
    //         //this.props.(this.state.description, this.state.priority);
    //         //this.onEditClick();
    //         //todoListCopy.push(todo)
    //             this.handleEditTodo(this.handleEditTodo, this.state.description, this.state.priority);
    //             //this.setState({isEditing: false})       
    // }

    // handleEditTodo(e){
    //     this.setState({ description: this.props.description });
    //   } 

    render() {
        return (
            (!this.state.isEditing) ?
                <div className="container col-lg-12">
                    <div>
                        <li className={this.highPriority()}>{this.state.description}
                            <input className="checkBox pull-left" id="checkBox" type="checkbox"></input>
                            <a className="pull-right ml-2" name="delete-todo" type="button"><span className="glyphicon glyphicon-trash" onClick={this.handleDelete}></span></a>
                            <a className="pull-right" name="edit-todo"type="button"><span className="glyphicon glyphicon-edit" onClick={this.onEditClick}></span></a>
                        </li>
                    </div>
                </div>
                :
                <div className="editForm">
                    <label>
                        <strong>Description</strong>
                    </label>
                    <textarea name='description' id='edit' className='update-todo-text' onChange={this.handleInputChange} />
                    <label>
                        <strong>Priority</strong>
                    </label>
                    <select name='create-todo-priority' id='priority' className='update-todo-priority btn-block' placeholder='Select a Priority' onChange={this.handleInputChange}>
                        <option value='1'>High Priority</option>
                        <option value='2'>Medium Priority</option>
                        <option value='3'>Low Priority</option>
                    </select>
                    <div className='mt-2'>
                        <button name='update-todo' type='submit' className='btn btn-success pull-right' onClick={this.handleSaveButton}>Save</button>
                    </div>
                </div>

        );
    }
}
export default Todo;
