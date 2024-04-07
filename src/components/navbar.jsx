import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  const navItems = [
    {
      name : "Home",
      link : "/"
    },
    {
      name : "To-Do",
      link : "/todolist"
    },
    {
      name : "Calculator",
      link : "/calculator"
    },
    {
      name : "Accordian",
      link : "/accordian"
    },
    {
      name : "List",
      link : "/list-props-map"
    }
  ]
  
  
  return (
    <div>
      <ul className='flex gap-4'>
        {
          navItems.map((items) => {
            return <li><Link href={items.link}>{items.name}</Link></li>
          })
        }
      </ul>
    </div>
  )
}

export default Navbar
