import React from 'react'

const dayList = (props) => {
    const days = ["mon","tues","wednes","thurs","fri","satur"]
  return (
    <>
      <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border m-auto">
  <ul class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
    {
        days.map((items) => {
            return <li role="button"
            class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none bg-blue-gray-50/50 text-start text-blue-gray-700 hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            {items}
          </li>
        })
    }
  </ul>
</div>
    </>
  )
}

export default dayList
