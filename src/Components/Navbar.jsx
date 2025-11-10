import React from 'react'
import { navLinks } from '../../constants/index.js'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
        scrub: true
      }
    });
     
    navTween.fromTo('nav', {backgroundColor: 'transparent'}, {
      backgroundColor: '#000000ba',
      backgroundFilter: 'blur(10px)',
      duration: 1,
      ease: 'power1.out',
    });
  })


  return (
    <nav className=''>
      <div className="nav-hold flex items-center justify-between py-4 px-8">
        <a href="#home" className= "flex gap-2">
          <img src="/images/logo.png" alt="Logo" />
          <span className="text-2xl font-bold">YMojito's</span>
        </a>

        <ul className='flex items-center justify-between gap-5 list-none'>
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