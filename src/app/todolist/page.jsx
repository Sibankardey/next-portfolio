import React from 'react'
import Heading from '@/components/heading'
import styles from "@/app/todolist/styles.module.css"
import TodoInput from '@/components/todoInput'
import TodoRow from '@/components/todoRow'
import TodoItemsContainer from '@/components/todoItemsContainer'
const page = () => {
  const todoArray= [{
    taskName:"bath",
    date:"10/02/2024"
  },
  {
    taskName:"Eating",
    date:"10/02/2024"
  },
  {
    taskName:"Medicine",
    date:"10/02/2024"
  },
  {
    taskName:"Chill",
    date:"10/02/2024"
  }
]
  return (
    <div>
      <Heading heading="To Do List"/>

      <div className={styles.todo} >
        <TodoInput />
       <TodoItemsContainer todoArray={todoArray}/>

      </div>
    </div>
  ) 
}

export default page
