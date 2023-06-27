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
                <Addtodo Addtolist = {this.addingToDoItems} />
            </div>
        );
    }

    myDelete = (arg1) => {
        const todo = this.state.todo.filter(item => item.id!== arg1.id)
        this.setState({todo})
        localStorage.setItem("todo",JSON.stringify(todo));

    }

    addingToDoItems =(value) =>{
        if (value){
                const todo = [...this.state.todo];
                const id = todo.length===0 ? 1 : todo[todo.length-1].id+1;
                todo.push({value , id});
                this.setState({todo : todo});
                const item = localStorage.getItem("todo123") ? JSON.parse(localStorage.getItem("todo123")) : []
                item.push({value , id});
            localStorage.setItem("todo123",JSON.stringify(item));
        }

        else {
            console.log('no todo taks yet');
        }
    }
}
 
export default Todo;