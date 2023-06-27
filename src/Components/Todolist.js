import React, { Component } from 'react'

class Todolist extends Component {

    render() { 
        return (
            <React.Fragment>
                <tr>
                    <td style={{width:15}} className='text-center'>
                        {this.props.number}
                    </td>
                    <td style={{width:15}} className='text-center'>
                        <input type='checkbox'/>
                    </td>
                    <td style={{width:200}} className='text-center'>
                        {this.props.myToDo.value}
                    </td>
                    <td style={{width:50}} className='text-center'>
                        <button onClick={()=>{this.props.myDelete(this.props.myToDo)}} className='btn btn-danger'>Delete</button>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}
 
export default Todolist;