import React, { Component } from 'react'
import Todolist from './Todolist';

class Addtodo extends Component {

    state = {
        defaultvalue : "",
        value : this.props.Addtodovalue,

    }

    render() { 
        
        return (
            <div className='container'>

                <Todolist Tododata={mydata} />

                <form onSubmit={this.whensubmit} className='border-top border-bottom'>
                    <div className="input-group m-3">
                    <input onChange={this.mytodo} type="text" className="form-control" placeholder="To Do" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <button type="submit" className="btn btn-success">Add To Do</button>
                    </div>
                </form>
            </div>
        );
    }

    mytodo= (event) =>{
        this.setState({value : event.target.value});
    };

    whensubmit = (event) => {
        event.preventDefault();
        this.props.myAddToDo(this.state.value);
        this.setState({value:""});
    }
}

 
export default Addtodo;