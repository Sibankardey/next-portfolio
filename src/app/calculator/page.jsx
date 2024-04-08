import React from 'react'
import Heading from '@/components/heading'
import styles from '@/app/calculator/calculator.module.css'
const page = () => {
  return (
    <div>
        <Heading heading="Calculator"/>
        <div className={styles.calculator}>
          <div className="input-sec">
          <input type="text" />
          </div>
          <div className="buttonContainer">
            <button>C</button>
          </div>
        </div>
    </div>
  )
}

export default page
