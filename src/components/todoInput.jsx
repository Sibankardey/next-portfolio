import React from 'react'
import styles from '@/app/todolist/styles.module.css'

const todoInput = () => {
  return (
    <div>
      <div className={styles.todoRow}>
          <input type="text" className='w-40'/>
          <input type="date" className='w-40'/>
          <button className='w-20'>Add</button>
        </div>
    </div>
  )
}

export default todoInput
