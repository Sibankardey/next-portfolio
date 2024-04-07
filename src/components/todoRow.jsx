import React from 'react'
import styles from "@/app/todolist/styles.module.css"

const todoRow = ({taskName, date}) => {
  return (
    <>
     <div className={styles.todoRow}>
      <p className='w-40'>{taskName}</p>
     <p className='w-40'>{date}</p>
      <button className='w-20'>Delete</button>
    </div>
    
      
    </>
  )
}

export default todoRow
