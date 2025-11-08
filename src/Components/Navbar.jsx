import React from 'react'
import { navLinks } from '../../constants/index.js'

const Navbar = () => {
  return (
    <nav className=''>
      <div className="nav-hold flex items-center justify-between py-4 px-8">
        <a href="#home" className= "flex gap-2">
          <img src="/images/logo.png" alt="Logo" />
          <span className="text-2xl font-bold">YMojito's</span>
        </a>

        <ul className='flex items-center justify-between gap-8 list-none'>
          {navLinks.map((link) => (
            <li key={link.id}>
               <a href= {`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}

export default Navbar