import React, { Component } from 'react'
import Todo from './Components/Todo';


class App extends Component {
  render() { 
    return (
      <div className='container m-3'>
        <h1 className='text-center mb-5'>A Todo App using ReactJS</h1>
        <Todo/>
      </div>
    );
  }
}
 
export default App;