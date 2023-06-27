import React, { Component } from 'react'

class Addtodo extends Component {


    render() { 
        return (
            <div>
                <form>
                    <div className="input-group mb-3">
                    <input onChange={this.mytodo} type="text" className="form-control" placeholder="To Do" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <button type="submit" className="btn btn-primary">Add To Do</button>
                    </div>
                </form>
            </div>
        );
    }
}

 
export default Addtodo;