import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import 'bootstrap/dist/css/bootstrap.css';
import icon  from './download.png';


const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
    
    <h1 className="heading">Todo List    <img src={icon} height="40px" width="40px" /></h1><br></br><br></br>
    
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)