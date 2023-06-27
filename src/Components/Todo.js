import React, { Component } from 'react'
import Todolist from './Todolist';
import Addtodo from './Addtodo';

class Todo extends Component {

    state = {
        Addtodovalue : "",
        Edittodo : {},
        todo : localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
    }

    render() { 
        return (
            <div>
                {this.state.todo.map((item,index)=>
                <Todolist number={index+1} myToDo={item} myDelete = {this.myDelete}/>
                )}
            </div>
        );
    }

    myDelete = (arg1) => {
        const Todo = this.state.todo.filter(item => item.id!== arg1.id)
        this.setState({Todo})
    }

    addingToDoItems =(value) =>{
        if (value){
            const todo = [...this.state.todo];
            todo.push(value);
            this.state({Addtodovalue : todo})
        }

        else {
            console.log('no todo taks yet');
        }
    }
}
 
export default Todo;