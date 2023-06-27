import React, { Component } from 'react'
import Addtodo from './Components/Addtodo';

class App extends Component {
  render() { 
    return (
      <div className='container'>
        <h1 className='text-center'>A Todo App using ReactJS</h1>
        <Addtodo/>
      </div>
    );
  }
}
 
export default App;