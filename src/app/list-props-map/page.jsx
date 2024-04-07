import React from 'react'
import Heading from '@/components/heading'
import DayList from '@/components/dayList'
const page = ({heading}) => {
   
  return (
    <div>
      <Heading heading="list with props and map method"/>
      <DayList/>
    </div>
  )
}

export default page
