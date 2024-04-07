import React from 'react'
import TodoRow from './todoRow'

const todoItemsContainer = ({todoArray}) => {
  return (
    <>
    <div>
    {
        todoArray.map((items) => <TodoRow taskName={items.taskName} date={items.date}/>
        )
    }
      </div>    
    </>
  )
}

export default todoItemsContainer
